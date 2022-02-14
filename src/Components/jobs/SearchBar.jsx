import React from 'react';
import { Component } from "react/cjs/react.production.min";

class SearchBar extends Component {
    constructor(){
        super()
        this.state = {
                 loading: true,
                 description: {}   
            }
    }
  
    render(){
    return(
    <div>
        <div className="searchBar">
            <form className="searchForm">
                <input type="text" id="city" name="city" placeholder="City" />
                <input type="text" id="jobTitle" name="jobTitle" placeholder="Job Title" />
                <select name="category" name="category">
                    <option value="" disabled selected>Industry</option>
                    <option value="Medical">Medical</option>
                    <option value="Tech">Tech</option>
                    <option value="Finance">Finance</option>
                </select>
                <input type="submit" id="submit" name="submit" value="Submit" />
            </form>
        </div>
    </div>
    )

}
}
export default SearchBar;