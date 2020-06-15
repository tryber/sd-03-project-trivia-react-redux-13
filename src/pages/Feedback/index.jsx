import React from 'react';
import Navbar from '../../components/Navbar';
import GetLinks from './GetLinks';
import setLocalStorage from './setLocalStorage';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  componentDidMount() {
    setLocalStorage();
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
              <GetLinks />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Feedback;
