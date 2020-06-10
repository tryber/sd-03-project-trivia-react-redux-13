import React from 'react';
import PropTypes from 'prop-types';

function Button({ index, correctAnswer, result }) {
  return (
    <button
      className="buttons"
      data-testid={
      result === correctAnswer ? 'correct-answer' : `wrong-answer-${index}`
      }
    >
      {result}
    </button>
  );
}

Button.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Button;
