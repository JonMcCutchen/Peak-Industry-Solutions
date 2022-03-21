import React, { useState, useEffect } from 'react';

function SearchBar({setJob, setIsSearchClicked, jobCategory}) {  
    const [search, setSearch] = useState({city:"", jobTitle: "", industry: ""});
    const [jobIndustry, setJobIndustry] = useState([])

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
    
    // const uniqueIndustry = [...new Set(jobIndustry.map(item => item.industry))]
    // console.log(uniqueIndustry)

    useEffect(() => {
      setJobIndustry(jobCategory)

    }, [])



    return(
    <div className="searchBar">
            <form className="searchForm" >
                <input type="text" id="city" name="city" placeholder="City" onChange={handleChange}/>
                <input type="text" id="jobTitle" name="jobTitle" placeholder="Job Title" onChange={handleChange} />
                <select name="industry" onChange={handleChange}>
                    {/* {uniqueIndustry.map((industry, index) => {
                            return(
                                    <option value={industry} key={index}>{industry}</option>          
                            )
                        })
                    } */}
                    <option value="" defaultValue hidden>Industry</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Warehousing">Warehousing</option>
                </select>
                <input type="submit" id="submit" value="Submit" onClick={handleSubmit}/>
            </form>
    </div>
    )

}

export default SearchBar;