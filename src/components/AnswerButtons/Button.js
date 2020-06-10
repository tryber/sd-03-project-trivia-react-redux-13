import React from 'react';
import PropTypes from 'prop-types';

function Button({ index, correct_answer, result }) {
  return (
    <button
      className="buttons"
      data-testid={
      result === correct_answer ? 'correct-answer' : `wrong-answer-${index}`
      }
    >
      {result}
    </button>
  );
}

Button.propTypes = {
  correct_answer: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Button;
