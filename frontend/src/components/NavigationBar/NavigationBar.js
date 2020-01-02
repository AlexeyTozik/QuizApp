import React from "react";
import Search from "../Search";
import "./NavigationBar.css";

const NavigationBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container collapse navbar-collapse mr-auto">
                    <a class="navbar-brand" href="#">Hidden brand</a>
                    <div class="mr-auto"></div>
                    <Search />
                </div>
            </nav>
        </div>
    );
}

export default NavigationBar;