import React, {useState} from 'react';
import SearchBar from './SearchBar';
import JobListing from './JobListing';

function JobsPage() {
    const [job, setJob] = useState({city: "", jobTitle: "", industry:""});
    const [isSearchClicked, setIsSearchClicked] = useState(false)
    return(
        <div>
            {/* {console.log(job)} */}
            <h1 className="browseHeader">Browse Jobs</h1>
            <SearchBar setJob={setJob} setIsSearchClicked={setIsSearchClicked}/>
            <JobListing job={job} isSearchClicked={isSearchClicked}/>
        </div>
    )
}

export default JobsPage;