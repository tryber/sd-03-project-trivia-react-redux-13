import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';

class Feedback extends React.Component {
  render() {
    // const state = (localStorage.getItem('state') !== null) ? JSON.parse(localStorage.getItem('state')) : { player: { hits: '', score: '' } };
    // const { hits, score } = state.player;
    const { hits, score } = this.props;
    const answerFeedback = hits >= 3 ? 'Mandou bem!' : 'Podia ser melhor...';
    return (
      <div className="flexbox">
        <div className="size">
          <header><Navbar /></header>
          <h2 data-testid="feedback-text">{answerFeedback}</h2>
          <p data-testid="feedback-total-score">{`Você fez ${score} pontos`}</p>
          <p data-testid="feedback-total-question">{`Foram ${hits} questões corretas!`}</p>
          <section>
            <div >
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
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hits: state.hits,
  score: state.score,
});

Feedback.propTypes = {
  hits: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
