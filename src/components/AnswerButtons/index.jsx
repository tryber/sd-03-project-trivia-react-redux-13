import React from 'react';
import './style.css';

function AnswersButtons({correct_answer, incorrect_answers}) {
  const sorted = [];

  const randomicQuestions = (array) => array
.sort((itemA, itemB) => Math.random() - Math.random())

  const getAnswersButtons = (arr) =>
    arr.map((result) => (
      <div>
        <button className="buttons">{result}</button>
      </div>
    ));
  return <div>{getAnswersButtons(arr)}</div>;
}

export default AnswersButtons;
