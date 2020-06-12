import React from "react";
import PropTypes from "prop-types";
import randomicQuestions from "./randomicQuestions";
import "./style.css";
import Button from "./Button";

function AnswersButtons({ data, update, selected }) {
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
          update={update}
          selected={selected}
        />
      );
    });
  return <div>{getAnswersButtons(answers)}</div>;
}

AnswersButtons.propTypes = {
  data: PropTypes.object,
};

export default AnswersButtons;
