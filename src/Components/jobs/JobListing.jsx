
import React, { useEffect, useState } from "react";

const JobListing = () => {
    const [advice, setAdvice] = useState({company: []/*, jobTitle: "", location: "", image:""*/});

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon/";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                
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
        <div >
            <div>
                {advice.company.map((item, index) => {
                    return(
                    <div className="jobListing" key={item.name}>
                        <div  className="listingInfo" >
                            <h2 >{item.name}</h2>
                            <h2 >{item.name}</h2>
                            <h2 >{item.name}</h2>
                         </div>

                         <button className="jobSubmit"><h2>Apply</h2></button>
                    </div>
                    )
                })} 
            </div>
        </div>
    );
};


export default JobListing;