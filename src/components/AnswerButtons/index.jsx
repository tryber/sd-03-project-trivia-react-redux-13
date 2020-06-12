import React from 'react';
import PropTypes from 'prop-types';
import randomicQuestions from './randomicQuestions';
import './style.css';
import Button from './Button';
import typeData from '../types';

function AnswersButtons({ data, update, selected }) {
  const { correct_answer: correctAnswer, incorrect_answers: incorrectAnswers } = data;
  const answers = [correctAnswer, ...incorrectAnswers];

  const getAnswersButtons = (array) =>
    randomicQuestions(array).map((result) => {
      let index = 0;
      if (result !== correctAnswer) index += 1;
      return (
        <Button
          index={index}
          correctAnswer={correctAnswer}
          result={result}
          key={result}
          update={update}
          selected={selected}
        />
      );
    });
  return <div>{getAnswersButtons(answers)}</div>;
}

AnswersButtons.propTypes = {
  data: PropTypes.shape(typeData).isRequired,
  update: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default AnswersButtons;
