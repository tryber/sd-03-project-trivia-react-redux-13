import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  componentDidMount() {
    this.setLocalStorage();
  }

  setLocalStorage() {
    const state = (localStorage.getItem('state') !== null)
    ? JSON.parse(localStorage.getItem('state'))
    : { player: { name: '', gravatarEmail: '', assertions: 0, score: 0 } };
    const { name, gravatarEmail, score } = state.player;
    const player = { name, score, picture: gravatarEmail };
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    if (ranking && ranking.length > 0) {
      const updateRaking = JSON.stringify([...ranking, player]);
      localStorage.setItem('ranking', updateRaking);
    }
    localStorage.setItem('ranking', JSON.stringify(player));
  }

  render() {
    const state = (localStorage.getItem('state') !== null)
    ? JSON.parse(localStorage.getItem('state'))
    : { player: { name: '', gravatarEmail: '', assertions: 0, score: 0 } };
    const { assertions, score } = state.player;
    const answerFeedback = assertions >= 3 ? 'Mandou bem!' : 'Podia ser melhor...';
    return (
      <div className="flexbox">
        <div className="size">
          <Navbar />
          <h2 data-testid="feedback-text">{answerFeedback}</h2>
          <p data-testid="feedback-total-score">{`Você fez ${score} pontos`}</p>
          <p data-testid="feedback-total-question">{`Foram ${assertions} questões corretas!`}</p>
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

export default Feedback;
