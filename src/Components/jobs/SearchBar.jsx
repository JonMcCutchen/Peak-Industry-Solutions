import React, { useState } from 'react';

function SearchBar({setJob, setIsSearchClicked}) {  
    const [search, setSearch] = useState({city:"", jobTitle: "", industry: ""});

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
    return(
    <div>
        <div className="searchBar">
            <form className="searchForm" >
                <input type="text" id="city" name="city" placeholder="City" onChange={handleChange}/>
                <input type="text" id="jobTitle" name="jobTitle" placeholder="Job Title" onChange={handleChange} />
                <select name="industry" onChange={handleChange}>
                    <option value="" disabled defaultValue>Industry</option>
                    <option value="Medical">Medical</option>
                    <option value="Tech">Tech</option>
                    <option value="Finance">Finance</option>
                </select>
                <input type="submit" id="submit" value="Submit" onClick={handleSubmit}/>
            </form>
        </div>
    </div>
    )

}

export default SearchBar;