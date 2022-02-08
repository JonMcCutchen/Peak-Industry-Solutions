import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header() {
    return(
        <Router>
            <header className="header">
                <div className="nav">
                    <Link to='/jobs'>Jobs</Link>
                    <Link to='/employees'>Employees</Link>
                    <Link to='/employers'>Employers</Link>
                    <Link to='/about-us'>About Us</Link>
                </div>
            </header>
            {/* <Switch>
            <Route path="/jobs">
              
            </Route>
            <Route path="/">
              
            </Route>
            <Route exact path="/">
              
            </Route>
          </Switch> */}
        </Router>
        
    )

}

export default Header;
