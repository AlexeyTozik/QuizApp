import React from "react";
import Search from "../Search";
import "./NavigationBar.css";

const NavigationBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-secondary bg-light">
                <div className="container collapse navbar-collapse mr-auto">
                    <div className="mr-auto"></div>
                    <Search />
                </div>
            </nav>
        </div>
    );
}

export default NavigationBar;