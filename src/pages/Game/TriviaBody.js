import React from "react";
import Question from "../../components/Question";
import AnswerButtons from "../../components/AnswerButtons";

function TriviaBody({ data, update, selected}) {
  if (data) {
    return (
      <div>
        <Question data={data} />
        <AnswerButtons
          data={data}
          update={update}
          selected={selected}
        />
      </div>
    );
  }
  return <p>Loading...</p>;
}

export default TriviaBody;
