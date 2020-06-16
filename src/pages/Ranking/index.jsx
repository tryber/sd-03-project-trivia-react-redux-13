import React from 'react';
import { Link } from 'react-router-dom';
import { tableBody, tableHead } from './getTable';
import './style.css';

function Ranking() {
  const ranking = JSON.parse(localStorage.getItem('ranking'));
  return (
    <div className="flexbox">
      <h4 data-testeid="ranking-title">Ranking</h4>
      <div>
        {tableHead()}
        {tableBody(ranking)}
      </div>
      <button data-testid="btn-go-home">
        <Link to="/">Início</Link>
      </button>
    </div>
  );
}

export default Ranking;
