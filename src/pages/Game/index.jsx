import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';
import Navbar from '../../components/Navbar';
import TriviaBody from './TriviaBody';
import { playerPontuation } from '../../action';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      next: false,
      selected: false,
      timer: 30,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.updateStates = this.updateStates.bind(this);
    this.onClick = this.onClick.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
  }

  componentDidMount() {
    this.timer()
  }

  timer() {
    const intervalId = setInterval(() => {
      this.setState((state) => {
        if (state.timer > 1) {
          return { timer: state.timer - 1 };
        }
        return { timer: 0 };
      });
    }, 1000);
    this.setState({ intervalId });
  }

  calculateScore(timer, difficulty) {
    const difficultyValues = { hard: 3, medium: 2, easy: 1 };
    return 10 + (timer * difficultyValues[difficulty]);
  };

  onClick(limit) {
    this.updateStates();
    this.nextQuestion(limit);
  }

  updateStates(isCorrect) {
    this.setState((state) => ({
      next: !state.next,
      selected: !state.selected,
    }));
    if (isCorrect) this.props.setPontuation(10);
  }

  nextQuestion(limit) {
    this.setState((state) => ({
      index: state.index + (1 % limit),
    }));
  }

  render() {
    const { data, history } = this.props;
    const { index, next, selected, timer } = this.state;
    if (index >= data.length) history.push('/feedback');
    if (data) {
      return (
        <div className="flexbox">
          <Navbar />
          {timer}
          <TriviaBody
            data={data[index]}
            update={this.updateStates}
            selected={selected}
          />
          {next && (
            <button
              type="button"
              className="button"
              onClick={() => this.onClick(data.length)}
            >
              PRÓXIMA
            </button>
          )}
        </div>
      );
    }
    return <p>Loading...</p>;
  }
}

const mapStateToProps = (state) => ({
  data: state.request.data,
});

const mapDispatchToProps = (dispatch) => ({
  setPontuation: (score) => dispatch(playerPontuation(score)),
})

Game.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  setPontuation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
