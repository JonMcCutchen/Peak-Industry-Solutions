import {React, useState} from "react";
import { db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { firebaseApp } from "../../firebase/firebase";
import AuthForm from "../auth/AuthForm";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import classes from '../auth/AuthForm.module.css';

function UserInfo(){
    const navigate = useNavigate();
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const email = currentUser.email;
    const [resumeName, setResumeName] = useState("");
    const [resume, setResume] = useState("");
    const [fileType, setFileType] = useState("");
    const [user, setUser] = useState({
        firstName: "", lastName: "", phoneNumber: "", resumeRef:`gs://peak-industry-solutions.appspot.com/${email}`, email: email,
    })
    
    const storage = getStorage();
   

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
        
    }
 

    const handleResume = (e) => {
        const file = e.name;
        setResumeName(e.name)
        setResume(e)

        const name = e.name;
        const lastDot = name.lastIndexOf('.');
      
        const fileName = name.substring(0, lastDot);
        const ext = name.substring(lastDot + 1);
        //gets sets fileType to extension
        setFileType(ext);
    }

    //fix so that it uses the users email to store file filename has to end in .pdf or .docx 
     const storageRef = ref(storage, `${email}.${fileType}`);
    
    
    const handleSubmit = (e) => {  
        uploadBytes(storageRef, resume)
        setDoc(doc(db, "user-info", `${email}`), {
            user,
            fileType
        })
        .then(alert("Info submitted successfully"))
        .then(navigate("/profile"))
    }

    return(
       
            <div>
                <form className={classes.auth}>
                <div className={classes.control}>
                    <label htmlFor='firstName'>First Name</label>
                    <input type="text" name="firstName" placeholder="First Name" onChange={handleChange}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='resume'>Upload Resume</label>
                    <input id="file" type="file" name="resume" placeholder="resume" accept=".docx, .pdf" onChange={(e) => { handleResume(e.target.files[0])}}/>
                </div>
                
                <div className={classes.actions}>
                    <button onClick={handleSubmit}>Submit</button>
                </div>


                    
                </form>
               
            </div>     
    )
}

export default UserInfo;