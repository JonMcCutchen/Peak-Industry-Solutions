
import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import classes from '../auth/AuthForm.module.css'
import jobPlacholderImage from '../../assets/placeholder-job-svgrepo-com.svg'

const JobListing = ({job, isSearchClicked}) => {
    let [jobInfo, setJobInfo] = useState([]);/*, jobTitle: "", jobLocation: "", companyName:""*/
    let [isLoading, setIsLoading] = useState(true)
    let [isSClicked, setSClicked] = useState(false);
    const classRef = useRef(null);

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
            setJobInfo(getPostsFromFirebase);
            setIsLoading(false);
          
        }
   
        const style = {
            // Adding media query..
            '@media (maxWidth: 480px)': {
              display: 'block',
            },
          };
 
    useEffect( async()=> {
         
            getCollection();  
         
            // if(document.querySelector('.jobListing').textContent.includes("ama")){
            // document.querySelector('.jobListing').style.display = "none"
            // }
            
    }, [job]);
    
    if(isLoading){
        return <h1>Loading Data</h1>
    }

 

    return (
        <div >
            {jobInfo.length > 0 ? (
                jobInfo.map((jobMap, index) => 

                {
                if((isSearchClicked && jobMap.jobLocation.toLowerCase().includes(job.city.toLowerCase())) && (isSearchClicked && jobMap.jobTitle.toLowerCase().includes(job.jobTitle))){
                    return(
                        <div className="jobListing">
                                <img className="placeHolderImage" src={jobPlacholderImage}/>
                                <p>{jobMap.companyName}</p>
                                <p>{jobMap.jobLocation}</p>
                                <p>{jobMap.jobTitle}</p>
                                <div className="actions">
                                    <button className="">Apply</button>
                            </div>
                        </div>
                        )
                }
                {if(!isLoading){
                        return(
                            <div key={index} className="jobListing" style={isSearchClicked?{display: "none"}: style}>
                                <img className="placeHolderImage" src={jobPlacholderImage}/>
                                <p>{jobMap.companyName}</p>
                                <p>{jobMap.jobLocation}</p>
                                <p>{jobMap.jobTitle}</p>
                                <div className="actions mobileApplyButton">
                                    <div>
                                        <button className="">Apply</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
                
            }))
            :(<h1>No jobs yet</h1>)}
        </div>
    );
};


export default JobListing;