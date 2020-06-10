import React from 'react';
import './style.css';

function AnswersButtons() {
  const arr = [
    1,
    2,
    3,
  ];

  const getAnswersButtons = () =>
    arr.map((result) => (
      <div>
        <button className="buttons">{result}</button>
      </div>
    ));
  return <div>{getAnswersButtons(arr)}</div>;
}

export default AnswersButtons;
