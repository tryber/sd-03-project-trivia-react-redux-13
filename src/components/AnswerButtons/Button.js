import React from 'react';
import PropTypes from 'prop-types';

function Button({ index, correctAnswer, result, difficulty, onHandleSelect, selected }) {
  const onHandleClick = () => {
    if (result === correctAnswer) return onHandleSelect(true, difficulty);
    return onHandleSelect(false);
  };

  const getClasses = () => {
    if (selected) {
      return result === correctAnswer ? 'buttons correct' : `buttons incorrect`
    }
    return 'buttons'
  }

  return (
    <button
      onClick={onHandleClick}
      className={getClasses()}
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
  onHandleSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Button;
