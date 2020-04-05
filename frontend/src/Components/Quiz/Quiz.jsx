import React, { Fragment } from 'react'
import TestQuiz from '../TestQuiz/TestQuiz';


export default ({ name, difficult, description, image }) => {

  return (
    <Fragment>
      <img src={image} alt={name} style={{ maxWidth: 300 }} />
      <h1>{name}</h1>

      <h3>
        {difficult}
      </h3>

      <p>
        {description}
      </p>

      <TestQuiz/>
    </Fragment >
  );
}