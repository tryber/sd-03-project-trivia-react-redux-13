import React from 'react';
import { Link } from 'react-router-dom';

function GetLinks() {
  return (
    <div>
      <Link
        className="uk-button uk-button-secondary uk-width-1-1"
        data-testid="btn-ranking"
        to="/ranking"
      >
        VER RANKING
      </Link>
      <Link
        className="uk-button uk-button-danger uk-width-1-1"
        data-testid="btn-play-again"
        to="/"
      >
        JOGAR NOVAMENTE
      </Link>
    </div>
  );
}

export default GetLinks;
