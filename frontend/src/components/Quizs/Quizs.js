import React from "react";
import QuizItem from "../QuizItem";
import "./Quizs.css";


const Quizs = ({ testsData }) => {

    const allQuizs = testsData.map((item) => {

        return (
            <div key={item.id} className="pt-4">
                <QuizItem
                    {...item}
                />
            </div>
        );
    });

    return (
        <div className="container row">
            <div className="col-3"></div>
            <div className="col-9">
                {allQuizs}
            </div>
        </div>
    );
}

export default Quizs;