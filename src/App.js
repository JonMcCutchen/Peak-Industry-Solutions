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

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/jobs" element={<JobsPage/>}/>
            
          <Route path="/employees" element={<Employees/>}/>
             
          <Route exact path="/employers"/>
  
          <Route exact path="/employers"/>

          <Route exact path="/" element={<Homepage/>}/> 
          
        </Routes>
        <Footer/>

      </Router>

    </div>
  );
}

export default App;
