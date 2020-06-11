import React from 'react';
import './style.css';

function Question({ data }) {
  if(data !== undefined) return (
    <div>
      <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match">
        <div>
          <div className="uk-card uk-card-default uk-card-body border">
            <h3 className="uk-card-title">Titulo</h3>
            <p>{data.question}</p>
          </div>
        </div>
      </div>
    </div>
  );
  return <p>Loading...</p>
}

export default Question;
