import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';

function SearchBar({setJob, setIsSearchClicked, jobCategory}) {  
    const [search, setSearch] = useState({city:"", jobTitle: "", industry: ""});
    let [jobInfo, setJobInfo] = useState([]);/*, jobTitle: "", jobLocation: "", companyName:""*/
    let [isLoading, setIsLoading] = useState(true)
    const [jobIndustry, setJobIndustry] = useState([])
    let [categories, setCategories] = useState({});

    function handleChange(e){
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }
    function handleSubmit(e){
        e.preventDefault();
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
        setJob(search)
        setIsSearchClicked(true)
    }
    
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


    
    let uniqueIndustry = [...new Set(jobInfo.map(item => item.industry))]

    useEffect(() => {
        getCollection();  
        setJobIndustry(jobCategory)
    }, [])

    


        return(
    <div className="searchBar">
            <form className="searchForm" >
                <input type="text" id="city" name="city" placeholder="City" onChange={handleChange}/>
                <input type="text" id="jobTitle" name="jobTitle" placeholder="Job Title" onChange={handleChange} />
                <select name="industry" onChange={handleChange}>
                     <option value="" defaultValue hidden>Industry</option>
                     <option value="" defaultValue>All</option>
                    {uniqueIndustry.map((industry, index) => {
                            return(
                                    <option value={industry} key={index}>{industry}</option>          
                            )
                        })
                    } 
                     {/* <option value="" defaultValue hidden>Industry</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Warehousing">Warehousing</option> */}
                </select>
                <input type="submit" id="submit" value="Submit" onClick={handleSubmit}/>
            </form>
    </div>
    )
    

}

export default SearchBar;