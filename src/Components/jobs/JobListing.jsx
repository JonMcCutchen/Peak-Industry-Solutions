
import React, { useEffect, useState } from "react";

const JobListing = () => {
    const [advice, setAdvice] = useState({company: []/*, jobTitle: "", location: "", image:""*/});

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon/";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.results);
                setAdvice(({
                    company: json.results
                })
                
                );
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="jobListing">
            <div className="listingInfo">
                {advice.company.map((item, index) => {
                    <div>
                        <h1>{item.name}</h1>
                        {console.log(item.name)}
                    </div>
                })}
               
            </div>
        </div>
    );
};


export default JobListing;