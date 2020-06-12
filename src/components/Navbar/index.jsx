import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

function Navbar({ name, score, gravatar }){
  return (
    <nav>
      <div className="left">
        <h3 data-testid="header-player-name">
          <img src={gravatar} className="img" alt="avatar" data-testid="header-profile-picture" />
          Jogador: {name}
        </h3>
      </div>
      <div data-testid="header-score" className="right">
        <h3>{ score } Pontos</h3>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  gravatar: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

Navbar.propTypes = {
  gravatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Navbar);
