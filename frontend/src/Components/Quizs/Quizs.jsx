import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { NotFound } from '../Errors'
import Quiz from '../Quiz/Quiz';

export default ({ match: { url }, quizs, texts }) =>
  <Fragment>
    {/* <ul>
      {quizs.map(({ id, name }) =>
        <li key={id}>
          <Link to={`${url}/${id}`}>{name}</Link>
        </li>
      )}
    </ul> */}

    <Route exact path={url} render={
      () => <h3>Please select a quiz from above.</h3>
    } />
    <Route path={`${url}/:quizId`} render={
      props => {
        const quiz = quizs.find(({ id }) => id === props.match.params.quizId)

        if (!quiz) {
          return <NotFound />
        }

        return <Quiz {...props} {...quiz} />
      }
    } />
  </Fragment>

/* Прописать в quiz доп ссылки с id теста и перебрать их через map, проверить что значит match: {url}, изменить json на сервере*/