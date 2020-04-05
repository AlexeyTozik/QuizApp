import React, { Component, Fragment } from "react";
import M from 'materialize-css';
import Button from "@material-ui/core/Button";
import TimerIcon from "@material-ui/icons/Timer";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import questions from "../../questions.json";
import isEmpty from "./isEmpty";

export default class TestQuiz extends Component {
  state = {
    questions,
    currentQuestion: {},
    nextQuestion: {},
    previousQuestion: {},
    answer: "",
    numberOfQuestions: 0,
    numberOfAnsweredQuestions: 0,
    currentQuestionIndex: 0,
    score: 0,
    correntAnswers: 0,
    wrongAnswers: 0,
    time: {}
  };

  componentDidMount() {
    const {questions,currentQuestion,nextQuestion,previousQuestion} = this.state;
    this.displayQuestions(questions,currentQuestion,nextQuestion,previousQuestion);
  }

  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion,
    previousQuestion
  ) => {
    let { currentQuestionIndex } = this.state;

    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestion - 1];
      const answer = currentQuestion.answer;
      this.setState({
        currentQuestion,
        nextQuestion,
        previousQuestion,
        numberOfQuestions: questions.length,
        answer
      });
    }
  };

  handleOptionClick = e => {
    if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
      this.currentAnswer();
    } else {
      this.wrongAnswer();
    }
  };

  currentAnswer = () => {
    M.toast({
      html: 'Corrent Answer!',
      classes: 'toast-valid',
      displayLength: 1500
    })

    this.setState(
      prevState => ({
        score: prevState.score + 1,
        currentAnswers: prevState.currentAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
      }),
      () => {
        this.displayQuestions(
          this.state.questions,
          this.state.currentQuestion,
          this.state.nextQuestion,
          this.state.previousQuestion
        );
      }
    );
  };

  wrongAnswer = () => {
    navigator.vibrate(1000);
    M.toast({
      html: 'Wrong Answer!',
      classes: 'toast-invalid',
      displayLength: 1500
    })
    this.setState(prevState => ({
      wrongAnswers: prevState.wrongAnswers + 1,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
    }),
    () => {
      this.displayQuestions(
        this.state.questions,
        this.state.currentQuestion,
        this.state.nextQuestion,
        this.state.previousQuestion
      );
    });
  };

  render() {

    const { currentQuestionIndex, numberOfQuestions, currentQuestion} = this.state;

    return (
      <Fragment>
        <h5 className="questions">
          <div className="questions-head">
            <span>
              {currentQuestionIndex + 1} / {numberOfQuestions}
            </span>
            <span>
              10:00 <TimerIcon fontSize="small" />
            </span>
          </div>
          <h5>{currentQuestion.question}</h5>
          <div className="options-container">
            <p onClick={this.handleOption} className="option">
              {currentQuestion.optionA}
            </p>
            <p onClick={this.handleOption} className="option">
              {currentQuestion.optionB}
            </p>
          </div>
          <div className="options-container">
            <p onClick={this.handleOption} className="option">
              {currentQuestion.optionC}
            </p>
            <p onClick={this.handleOption} className="option">
              {currentQuestion.optionD}
            </p>
          </div>
          <div className="btn-group">
            <Button variant="contained">
              <ArrowBackIosIcon />
              Previous
            </Button>
            <Button variant="contained" color="primary">
              Next
              <ArrowForwardIosIcon />
            </Button>
            <Button variant="contained" color="secondary">
              Quit
              <CloseIcon />
            </Button>
          </div>
        </h5>
      </Fragment>
    );
  }
}
