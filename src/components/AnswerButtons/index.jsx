import React from 'react';
import PropTypes from 'prop-types';
import randomicQuestions from './randomicQuestions';
import './style.css';
import Button from './Button';

function AnswersButtons({ data }) {
  if (data !== undefined) {
    const { correct_answer, incorrect_answers } = data;
    const answers = [correct_answer, ...incorrect_answers];

    const getAnswersButtons = (array) =>
      randomicQuestions(array).map((result) => {
        let index = 0;
        if (result !== correct_answer) index += 1;
        return (
          <Button
            index={index}
            correctAnswer={correct_answer}
            result={result}
            key={result}
          />
        );
      });
    return <div>{getAnswersButtons(answers)}</div>;
  }
  return <p>Loading...</p>;
}

AnswersButtons.propTypes = {
  data: PropTypes.object,
};

export default AnswersButtons;
