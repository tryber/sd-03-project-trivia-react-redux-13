import React from 'react';
import PropTypes from 'prop-types';
import Question from '../../components/Question';
import AnswerButtons from '../../components/AnswerButtons';

function TriviaBody({ data, update, selected }) {
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

TriviaBody.propTypes = {
  data: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
}

export default TriviaBody;
