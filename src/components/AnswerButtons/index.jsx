import React from 'react';
import PropTypes from 'prop-types';
import randomicQuestions from './randomicQuestions';
import './style.css';
import Button from './Button';

function AnswersButtons({ correct_answer, incorrect_answers }) {
  const answers = [correct_answer, ...incorrect_answers];

  const getAnswersButtons = (array) =>
    randomicQuestions(array).map((result) => {
      let index = 0;
      if (result !== correct_answer) index += 1;
      return (
        <Button index={index} correct_answer={correct_answer} result={result} />
      );
    });
  return <div>{getAnswersButtons(answers)}</div>;
}

AnswersButtons.propTypes = {
  correct_answer: PropTypes.string.isRequired,
  incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AnswersButtons;
