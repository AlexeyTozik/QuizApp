import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NotFound } from '../Errors'
import Quizs from '../Quizs/Quizs'
import Layout from '../Layout'
import './main.css';

export default class App extends Component {
  state = {
    quizs: []
  }

  async componentDidMount() {
    const {quizs} = await (await fetch('http://127.0.0.1:8000/api/tests')).json();
    this.setState({ quizs })
  }

  render() {
    const { quizs } = this.state

    return <BrowserRouter>
      <Layout quizs={quizs}>
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path="/quizs" render={
            props => <Quizs {...props} {...this.state} />
          } />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  }
}