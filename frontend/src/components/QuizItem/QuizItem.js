import React, { Component } from "react";
import "./QuizItem.css";

export default class QuizItem extends Component {
    render() {
        const { label, img } = this.props;

        return (

            <div class="card">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={img} class="card-img" width="300px" height="auto" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{label}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}