import React, { Component } from "react";
import NavigationBar from "../NavigationBar";
import SideBar from "../SideBar";
import Quizs from "../Quizs";

import "./App.css";

export default class App extends Component {

    
    render() {
         return (
            <div>
                <NavigationBar />
                <SideBar />
                <Quizs />
            </div>
        )
    }
}
