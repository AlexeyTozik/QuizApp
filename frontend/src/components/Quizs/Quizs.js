import React from "react";
import QuizItem from "../QuizItem";
import "./Quizs.css";


const Quizs = () => {

    const allQuizs = todos.map((item) => {
        const { id, ...itemProps } = item;
    
        return (
            <li key={id} className="list-group-item">
                <QuizItem
                    {...itemProps}
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {allQuizs}
        </ul>
    );
}

export default Quizs;