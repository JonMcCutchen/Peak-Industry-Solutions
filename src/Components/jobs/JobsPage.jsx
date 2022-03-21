import React, {useState} from 'react';
import SearchBar from './SearchBar';
import JobListing from './JobListing';

function JobsPage() {
    const [job, setJob] = useState({city: "", jobTitle: "", industry:""});
    const [isSearchClicked, setIsSearchClicked] = useState(false)
    const [jobCategory, setJobCategory] = useState([])
    return(
        <div>
            {/* {console.log(job)} */}
            <h1 className="browseHeader">Browse Jobs</h1>
            <SearchBar setJob={setJob} setIsSearchClicked={setIsSearchClicked} jobCategory={jobCategory}/>
            <JobListing job={job} isSearchClicked={isSearchClicked} setJobCategory={setJobCategory}/>
        </div>
    )
}

export default JobsPage;