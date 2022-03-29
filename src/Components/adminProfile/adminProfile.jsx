import React, {useState, useEffect} from 'react';
import { getAuth, signOut} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import classes from '../auth/AuthForm.module.css';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { doc, getDoc, collection, addDoc } from "firebase/firestore";

function AdminProfile(){

    const [jobInfoToStore, setJobInfoToStore] = useState({companyName: "", industry: "", jobLocation: "", jobTitle: "", description: ""});
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        resume:"",
        type:""
    })
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
            jobTitle: jobInfoToStore.jobTitle,
            description: jobInfoToStore.description
          }).then(alert("Info submitted successfully"))
          .then(navigate("/profile"))
    }
    const signOutHandler = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
          
    }


    return(
        <div className="profile-container">
                        <h1>{user.firstName}'s Profile</h1>  
                        <h1> Add Job</h1>      


            <form className={classes.auth}>
                <div className={classes.control}>
                    <label htmlFor='companyName'>Company Name</label>
                    <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='industry'>Industry</label>
                    <input type="text" name="industry" placeholder="Industry" onChange={handleChange}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='jobLocation'>Job Location</label>
                    <input type="text" name="jobLocation" placeholder="Job Location" onChange={handleChange}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='jobTitle'>Job Title</label>
                    <input type="text" name="jobTitle" placeholder="Job Title" onChange={handleChange}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id="description" name="description" rows="4" cols="35" placeholder="Description" onChange={handleChange}></textarea>
                </div>
               
                <div className={classes.actions}>
                    <button onClick={handleSubmit}>Submit</button>
                </div>           
            </form>
            <div className="profile-logout">
                <button><Link onClick={signOutHandler} to='/login'>Logout</Link></button>
            </div>
        </div>
    )

}

export default AdminProfile;