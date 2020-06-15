export const onHandleClick = (result, correctAnswer, difficulty, onHandleSelect) => {
  if (result === correctAnswer) return onHandleSelect(true, difficulty);
  return onHandleSelect(false);
};

export const getClasses = (selected, result, correctAnswer) => {
  if (selected) {
    return result === correctAnswer ? 'buttons correct' : 'buttons incorrect';
  }
  return 'buttons';
};
