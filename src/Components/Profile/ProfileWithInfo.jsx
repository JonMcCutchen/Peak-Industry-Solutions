import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';
import { db } from '../../firebase/firebase';
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import classes from '../auth/AuthForm.module.css';


const ProfileWithInfo = () => {

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        resume:"",
        type:""
    })
    const [link, setLink] = useState("")
    const [jobInfoToStore, setJobInfoToStore] = useState({companyName: "", industry: "", jobLocation: "", jobTitle: ""});
    const navigate = useNavigate();

    let auth = getAuth();

    const currentUser = auth.currentUser;
    const email = currentUser.email;
    const docRef = doc(db, "user-info", email)


    
    useEffect(async() => {
        async function readDoc ()  {
            const mySnapshot = await getDoc(docRef);
            const docData = mySnapshot.data();   
            setUser({
                firstName: docData.user.firstName,
                lastName: docData.user.lastName, 
                email: docData.user.email,
                resume: docData.user.resumeRef,
                type: docData.fileType
            });
        }
        readDoc();

        
    }, []);

    const storage = getStorage();

    async function readDownloadURL() { 
        const url = await getDownloadURL(ref(storage, `gs://peak-industry-solutions.appspot.com/${user.email}.${user.type}`)) //gs://peak-industry-solutions.appspot.com/richard@gmail.com.docx
        setLink(url);

    }
    readDownloadURL();


    const signOutHandler = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            
        }).catch((error) => {
            // An error happened.
        });
          
    }

    const handleChange = (e) => {
        setJobInfoToStore({
            ...jobInfoToStore,
            [e.target.name]: e.target.value,
        })
        
    }
    async function handleSubmit(e){  
        const docRef = await addDoc(collection(db, "jobInfo"), {
            companyName: jobInfoToStore.companyName,
            industry: jobInfoToStore.industry,
            jobLocation: jobInfoToStore.jobLocation,
            jobTitle: jobInfoToStore.jobTitle
          }).then(alert("Info submitted successfully"))
          .then(navigate("/profile"))
    }

    if(currentUser.uid === "1f8QNb1Y8HV1JGQWx0JdFCbiOlv2"){
    
        <div className="profile-container">
            <h1>{user.firstName}'s Profile</h1>
            <div className="profile-logout">
                <button><Link onClick={signOutHandler} to='/login'>Logout</Link></button>
            </div>
         <h1>Hello</h1>
            
        </div>
        
    }
    return (
        <div className="profile-container">
            <h1>{user.firstName}'s Profile</h1>
            
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Resume: <a href={link} target='_blank' rel="noreferrer">View Resume</a></p>
            <p><Link to="/user-info">Change Information</Link></p>
            
           

            <div className="profile-logout">
                <button><Link onClick={signOutHandler} to='/login'>Logout</Link></button>
            </div>
        </div>
    )
    
}
export default ProfileWithInfo;