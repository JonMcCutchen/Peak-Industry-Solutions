import React from 'react';
import { Link } from 'react-router-dom';

function HomepageSignUpForm(){
    return(
        <div>
            <div className="competitiveJob">
                <h1>Interested in a competitive job?</h1>

                <Link to="/login"><button className="blueButton">Sign Up</button></Link>
            </div>

            <div className="skilledEmployees">     
                <h1>Interested in skilled employees?</h1>

                <button className="blueButton">Contact Us</button>
            </div>
            
        
        </div>
    )
}
export default HomepageSignUpForm;