import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Question({ data }) {
  return (
    <div>
      <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match">
        <div>
          <div className="uk-card uk-card-default uk-card-body border">
            <h3 className="uk-card-title" data-testid="question-category">
              {data.category}
            </h3>
            <p data-testid="question-text">{data.question}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Question.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    type: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Question;
