import { useContext } from 'react';
import './App.css';
import  Header  from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './Components/homepage/Homepage.jsx';
import Employees from './Components/employees/Employees';
import JobsPage from './Components/jobs/JobsPage';
import AboutUs from './Components/aboutUs/AboutUs';
import FAQ from './Components/FAQ';
import AuthForm from './Components/auth/AuthForm';

function App() {
  

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

          <Route path="/login" element={<AuthForm/>}/>
          
        </Routes>
        <Footer/>

      </Router>

    </div>
  );
}

export default App;
