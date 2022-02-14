import React from 'react';
//import 'C:\Peak Industry Solutions\peak-industry-solutions\src\App.css';
import HomepageSignUpForm from './HomepageSignupForm';
import sampleHero from '../../assets/images/sample-hero.jpg';
import sampleHeroTwo from '../../assets/images/sample-hero-2.jpg';
import map from '../../assets/images/map_city_in_usa_florence.png';
import SearchBar from '../jobs/SearchBar';

function Homepage() {
    return (
        <div className = "">
            <div className="hero"> 
                <SearchBar />
            </div>
            <div className="homepageContent">
                <div className="homepageLeft">
                    <h1>RAISING THE BAR FOR JOB SEEKERS IN THE SOUTHEAST</h1>
                    <img src={map} alt=""></img>
                    <p>Based in South Carolina, Peak Industry Solutions specializes in providing competitive job opportunities to job seekers as well as providing pre-screened, skilled workers to companies in multiple fields.</p>
                </div>

                <div className="homepageRight">
                    <HomepageSignUpForm/>
                </div>
                
            </div>

        </div>
    )
}

export default Homepage;