import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
import Navbar from '../../components/Navbar';
import TriviaBody from './TriviaBody';
import { playerPontuation } from '../../action';
import calculateScore from './calculateScore';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selected: false,
      timer: 30,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.onHandleSelect = this.onHandleSelect.bind(this);
    this.onClick = this.onClick.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
    this.getNextButton = this.getNextButton.bind(this);
  }

  componentDidMount() {
    this.timer();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
    this.timer();
  }

  onClick(limit) {
    this.onHandleSelect();
    this.nextQuestion(limit);
  }

  timer() {
    const interval = setInterval(() => {
      this.setState((state) => {
        if (state.timer > 1) {
          return { timer: state.timer - 1 };
        }
        return { timer: 0, selected: true };
      });
    }, 1000);
    this.setState({ interval });
  }

  onHandleSelect(isCorrect, difficulty) {
    const { timer } = this.state;
    this.setState((state) => ({
      selected: !state.selected,
    }));
    if (isCorrect) this.props.setPontuation(calculateScore(timer, difficulty));
  }

  nextQuestion(limit) {
    this.setState((state) => ({
      index: state.index + (1 % limit),
    }));
  }

  getNextButton() {
    const { index } = this.state;
    if (index < 4) {
      return (
        <button
          data-testid="btn-next"
          type="button"
          className="button"
          onClick={() => this.onClick(5)}
        >
          PRÓXIMA
        </button>
      );
    }
    return (
      <Link to="/feedback">
        <button
          data-testid="btn-next"
          type="button"
          className="button"
          onClick={() => this.onClick(5)}
        >
          FEEDBACK
        </button>
      </Link>
    );
  }

  render() {
    const { data } = this.props;
    const { index, selected, timer } = this.state;
    if (data) {
      return (
        <div className="flexbox">
          <Navbar />
          {timer}
          <TriviaBody
            data={data[index]}
            onHandleSelect={this.onHandleSelect}
            selected={selected}
          />
          {selected && this.getNextButton()}
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
});

Game.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPontuation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
