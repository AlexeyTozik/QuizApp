import React, { Component } from "react";
import axios from "axios";
import NavigationBar from "../NavigationBar";
import SideBar from "../SideBar";
import Quizs from "../Quizs";

import "./App.css";

export default class App extends Component {

    state = {
        testsData: []
    }

    componentDidMount() {
        this.getTests();
    }

    getTests() { 
        axios.get('http://127.0.0.1:5000/api/tests')
            .then(res => { 
                this.setState({ testsData: res.data }); 
            })
            .catch(err => { console.log(err); }); 
    }
    
    render() {
        return (
            <div>
                <NavigationBar />
                <div className="d-flex">
                    <SideBar />
                    <Quizs
                        testsData={this.state.testsData}
                    />
                </div>
            </div>
        );
    }
}
