import React from "react";
import "./Search.css";

const Search = () => {
    return (
        <div>
            <form class="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search;