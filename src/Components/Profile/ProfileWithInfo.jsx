import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';
import { db } from '../../firebase/firebase';
import { doc, getDoc, collection } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getAuth, signOut } from "firebase/auth";


const ProfileWithInfo = () => {

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        resume:"",
        type:""
    })
    const [link, setLink] = useState("")

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
            console.log("user signed out")
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
          
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