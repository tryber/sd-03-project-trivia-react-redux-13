import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar'

class Feedback extends React.Component {
  render() {
    const { hits, score } = this.props;
    const answerFeedback = hits < 3 ? 'Podia ser melhor...' : 'Mandou bem!';
    return (
      <div className="flexbox">
        <div className="size">
          <header><Navbar /></header>
          <h2 data-testid="feedback-text">{answerFeedback}</h2>
          <p data-testid="feedback-total-question">{`Você acertou ${hits} questões!`}</p>
          <p data-testid="feedback-total-score">{`Um total de ${score} pontos`}</p>
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

const mapStateToPros = state => ({
  score: state.score,
  hits: state.hits,
});

export default connect(mapStateToPros)(Feedback);
