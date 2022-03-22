import { useContext, useState, useEffect } from 'react';
import './App.css';
import  Header  from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Homepage from './Components/homepage/Homepage.jsx';
import JobsPage from './Components/jobs/JobsPage';
import AboutUs from './Components/aboutUs/AboutUs';
import FAQ from './Components/FAQ';
import AuthPage from './Components/auth/AuthPage';
import UserProfile from './Components/Profile/UserProfile';
import AdminProfile from './Components/adminProfile/adminProfile';
import ProfileWithInfo from './Components/Profile/ProfileWithInfo';
import { getAuth, onAuthStateChanged, setPersistence, browserSessionPersistence, signOut } from "firebase/auth";
import {doc, getDocFromCache, getDoc } from "firebase/firestore";
import { db } from "./firebase/firebase"

function App() {

  const auth = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // const currentUserEmail = auth.currentUser.email; 
  

  useEffect(() => {


      setPersistence(auth, browserSessionPersistence)
  .then(() => {
    onAuthStateChanged(auth, (user) => {  
      if(user) {
        
       
        setIsLoggedIn(true)
        const uid = user.uid;
        checkAdmin(user.email);
      } else {
        setIsLoggedIn(false);
      }
      });
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });

    
    console.log(isAdmin);

    

  }, [setPersistence])

  async function checkAdmin(email){
    const docRef = doc(db, "admin", email);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      setIsAdmin(true);
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("didnt run")
    }
    console.log(`${email} is`)
  }
  
  
  return (
    <div className="App">
      <Router>
        <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin}/>
        
        <Routes>

          <Route path="/jobs" element={<JobsPage/>}/>
             
          <Route path="/employers"/>

          <Route path="/about-us" element={<AboutUs/>}/>

          <Route exact path="/" element={<Homepage/>}/> 

          <Route path="/faq" element={<FAQ/>}/>

          <Route path="/login" element={<AuthPage/>}/>

          {isLoggedIn && (
            <Route path="/user-info" element={<UserProfile />}/> 
          )}

          {isAdmin && (
            <Route path="/adminProfile" element={<AdminProfile/>}/> 
          )}

          {isLoggedIn && (
            <Route path="/profile" element={<ProfileWithInfo/>}/> 
          )}
        </Routes>
        <Footer/>

      </Router>

    </div>
  );
}

export default App;
