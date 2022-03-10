import {React, useState} from "react";
import { db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { firebaseApp } from "../../firebase/firebase";
import AuthForm from "../auth/AuthForm";

function UserInfo(){
    const [user, setUser] = useState({
        firstName: "", lastName: "", phoneNumber: "", resume:""
    })
    
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }



    const auth = getAuth();
    const person = auth.currentUser;

    if (person) {
        console.log(person.uid)
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
    } else {
    // No user is signed in.
    console.log(`no`)
    }


    const emailId = "";
    
    const handleSubmit =  async (e) => {
        e.preventDefault();
        const auth = await getAuth();
        const currentUser = auth.currentUser;
        const uid = currentUser.uid;
        setDoc(doc(db, "user-info", `${emailId}`), {
            user
        })
        .then(alert("Info submitted successfully"))
    }

    return(
            <div>
                <form>
                    <input type="text" name="firstName" placeholder="First Name" onChange={handleChange}/>
                    <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange}/>
                    <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange}/>
                    <input type="file" name="resume" placeholder="resume" onChange={handleChange}/>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
                 <p>{user.firstName}</p>
                 <p>{user.lastName}</p>
                 <p>{user.phoneNumber}</p>
                 <p>{user.resume}</p>
            </div>     
    )
}

export default UserInfo;