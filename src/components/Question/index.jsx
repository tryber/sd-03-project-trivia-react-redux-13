import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import typeData from '../types';

function Question({ data: { category, question } }) {
  return (
    <div>
      <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match">
        <div>
          <div className="uk-card uk-card-default uk-card-body border">
            <h3 className="uk-card-title" data-testid="question-category">
              {category}
            </h3>
            <p data-testid="question-text">{question}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Question.propTypes = {
  data: PropTypes.shape(typeData).isRequired,
};

export default Question;
