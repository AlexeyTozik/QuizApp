import React from "react";
import "./dropDown.js";
import "./SideBar.css";

const SideBar = () => {
    return (
        <div className="sidenav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
        </div>
    );
}

export default SideBar;
