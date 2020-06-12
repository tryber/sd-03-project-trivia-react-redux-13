import React from 'react';
import PropTypes from 'prop-types';

function Button({ index, correctAnswer, result, update, selected }) {
  return (
    <button
      onClick={update}
      className="buttons"
      disabled={selected}
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
