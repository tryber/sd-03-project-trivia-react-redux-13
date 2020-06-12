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
  index: PropTypes.number.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Button;
