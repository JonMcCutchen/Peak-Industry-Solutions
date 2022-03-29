
import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import classes from '../auth/AuthForm.module.css'
import jobPlacholderImage from '../../assets/placeholder-job-svgrepo-com.svg'
import Description from "./Description";

const JobListing = ({job, isSearchClicked, setJobCategory}) => {
    let [jobInfo, setJobInfo] = useState([]);/*, jobTitle: "", jobLocation: "", companyName:""*/
    let [isLoading, setIsLoading] = useState(true)
    let [isSClicked, setSClicked] = useState(false);
    let [categories, setCategories] = useState({});
    const classRef = useRef(null);
    let [showDescriptionDiv, setShowDescriptionDiv] = useState("none");
    let [showJob, setShowJob] = useState(false)



    async function getCollection(){
        const querySnapshot = await getDocs(collection(db, "jobInfo"));
        const jobRef = collection(db, "jobInfo");
        const getPostsFromFirebase = []
   
                
        querySnapshot.docs.forEach((items) => {

            getPostsFromFirebase.push({
                ...items.data(),
                key: items.id,
            });

        });
           
        setJobCategory(getPostsFromFirebase)
        // log(`set job category ${getPostsFromFirebase[0]}`)
        setJobInfo(getPostsFromFirebase);
        setIsLoading(false);
          
    }
   
    const style = {
        // Adding media query..
        '@media (maxWidth: 480px)': {
            display: 'block',
        },
    };

    const [show, setShow] = useState("hidden");
    // const showDescription = () => {
    //     setShow("block");
    //     show == "none" ? "block" : "none"
    // }
 
    useEffect( async()=> {
         
            getCollection();  
            
    }, [job]);

    
    if(isLoading){
        return <h1>Loading Data</h1>
    }
    
    function showDescriptionHandler () {
        showDescriptionDiv === "block" ? setShowDescriptionDiv("none") : setShowDescriptionDiv("block")
    }

 

    return (
        <div >
            {jobInfo.length > 0 ? (
                jobInfo.map((jobMap, index) => 
                

                {
                if((isSearchClicked && jobMap.jobLocation.toLowerCase().includes(job.city.toLowerCase())) && (isSearchClicked && jobMap.jobTitle.toLowerCase().includes(job.jobTitle)) && (isSearchClicked && jobMap.industry.toLowerCase().includes(job.industry.toLowerCase()))){
                    return(
                        <div className="jobListing">
                                <img className="placeHolderImage" src={jobPlacholderImage}/>
                                <div className="listing-info-container">
                                    <div className="listing-info">
                                        <p className="jobListingHeader">Company</p>
                                        <p>{jobMap.companyName}</p>
                                    </div>
                                    
                                    <div className="listing-info">
                                        <p className="jobListingHeader">Location</p>
                                        <p>{jobMap.jobLocation}</p>
                                    </div>

                                    <div className="listing-info">
                                        <p className="jobListingHeader">Job Title</p>
                                        <p>{jobMap.jobTitle}</p>
                                    </div>

                                </div>
                                <div className="actions">
                                    <Link to="/login"><button className="">Apply</button></Link>
                                 </div>
                        </div>
                        )
                }
                {if(!isLoading){
                        return(
                            <div>
                                <div key={index} className="jobListing" style={isSearchClicked?{display: "none"}: style} onClick={() => {showDescriptionHandler(); setShowJob(index)}}>
                                    
                                    <img className="placeHolderImage" src={jobPlacholderImage}/>
                                    <div className="listing-info-container">
                                        <div className="listing-info">
                                            <p className="jobListingHeader">Company</p>
                                            <p>{jobMap.companyName}</p>
                                        </div>
                                        
                                        <div className="listing-info">
                                            <p className="jobListingHeader">Location</p>
                                            <p>{jobMap.jobLocation}</p>
                                        </div>

                                        <div className="listing-info">
                                            <p className="jobListingHeader">Job Title</p>
                                            <p>{jobMap.jobTitle}</p>
                                        </div>

                                    </div>
                                    
                                    
                                    <div className="actions mobileApplyButton">
                                        <div>
                                            <Link to="/login"><button className="">Apply</button></Link>
                                        </div>
                                    </div>

                                    <div className="container jobDescriptionContainer" style={{display: showDescriptionDiv}}>
                                    {showJob === index && <Description jobMapDescription={jobMap.description}/>}
                                    </div>

                                </div>


                            </div>
                        )
                    }
                }
                
            }))
            :(<h1>No jobs yet</h1>)
            }
        </div>
    );
};


export default JobListing;