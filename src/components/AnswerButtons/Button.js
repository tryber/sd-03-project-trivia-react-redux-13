import React from 'react';
import PropTypes from 'prop-types';

function Button({ index, correctAnswer, result, update, selected }) {
  const handleOnClik = () => {
    if (result === correctAnswer) return update(true);
    return update(false);
  };
  return (
    <button
      onClick={handleOnClik}
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
