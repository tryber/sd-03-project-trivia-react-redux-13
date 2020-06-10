import React from 'react';
import PropTypes from 'prop-types';
import randomicQuestions from './randomicQuestions';
import './style.css';
import Button from './Button';

function AnswersButtons({ correctAnswer, incorrectAnswer }) {
  const answers = [correctAnswer, ...incorrectAnswer];

  const getAnswersButtons = (array) =>
    randomicQuestions(array).map((result) => {
      let index = 0;
      if (result !== correctAnswer) index += 1;
      return (
        <Button index={index} correctAnswer={correctAnswer} result={result} />
      );
    });
  return <div>{getAnswersButtons(answers)}</div>;
}

AnswersButtons.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswer: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AnswersButtons;
