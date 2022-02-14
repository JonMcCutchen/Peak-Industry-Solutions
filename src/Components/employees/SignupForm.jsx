import React from 'react';

function SignupForm() {
    return (
        <form className="signup">
            <div>
                <input type="text" id="fname" name="fname" placeholder="First Name" required/>
                
                <input type="text" id="lname" name="lname" placeholder="Last Name"required/>
                
                <input type="email" id="email" name="email" placeholder="Email" required/>
                
                <input type="tel" id="phone" name="phone" placeholder="Phone #" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"required/>

                <input type="password" id="password" name="password" placeholder="Password" minlength="8" required/>
            </div>

            <div className="buttons">
                <div className="fileButton">
                <label for="file">Upload Resume</label>
                </div>
                <input type="file" id="file" style={{display: "none"}} name="file"  required/>

                <button type="submit" value="Submit">Submit</button>
            </div>

        </form>
    )
    
}

export default SignupForm;