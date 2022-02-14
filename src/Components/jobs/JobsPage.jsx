import React from 'react';
import SearchBar from './SearchBar';
import JobListing from './JobListing';

function JobsPage() {
    return(
        <div>
            <h1 className="browseHeader">Browse Jobs</h1>
            <SearchBar/>
            <JobListing />
        </div>
    )
}

export default JobsPage;