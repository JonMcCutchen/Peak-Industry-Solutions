import { useContext } from 'react';
import './App.css';
import  Header  from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import AuthContext from './Components/store/authContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Homepage from './Components/homepage/Homepage.jsx';
import Employees from './Components/employees/Employees';
import JobsPage from './Components/jobs/JobsPage';
import AboutUs from './Components/aboutUs/AboutUs';
import FAQ from './Components/FAQ';
import AuthPage from './Components/auth/AuthPage';
import UserProfile from './Components/Profile/UserProfile';
import AdminProfile from './Components/adminProfile/adminProfile';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>

          <Route path="/jobs" element={<JobsPage/>}/>
            
          <Route path="/employees" element={<Employees/>}/>
             
          <Route path="/employers"/>

          <Route path="/aboutUs" element={<AboutUs/>}/>

          <Route exact path="/" element={<Homepage/>}/> 

          <Route path="/faq" element={<FAQ/>}/>

          <Route path="/login" element={<AuthPage/>}/>

          {authCtx.isLoggedIn && (
            <Route path="/profile" element={<UserProfile/>}/> 
          )}

          {authCtx.isLoggedIn && (
            <Route path="/adminProfile" element={<AdminProfile/>}/> 
          )}
        </Routes>
        <Footer/>

      </Router>

    </div>
  );
}

export default App;
