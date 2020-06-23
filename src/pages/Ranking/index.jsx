import React from 'react';
import { Link } from 'react-router-dom';
import { tableBody, tableHead } from './getTable';
import './style.css';

function Ranking() {
  const ranking = JSON.parse(localStorage.getItem('ranking'));
  return (
    <div className="flexbox">
      <div className="size-ranking">
        <h3 data-testid="ranking-title" className="ranking-title">Ranking</h3>
        <div className="ranking-container">
          <div>
            {tableHead()}
            {tableBody(ranking)}
          </div>
          <Link data-testid="btn-go-home" className="btn-start" to="/">Início</Link>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
