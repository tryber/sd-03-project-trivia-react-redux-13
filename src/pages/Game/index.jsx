import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';
import Navbar from '../../components/Navbar';
import TriviaBody from './TriviaBody';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      next: false,
      selected: false,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.updateStates = this.updateStates.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(limit) {
    this.updateStates();
    this.nextQuestion(limit);
  }

  updateStates() {
    this.setState((state) => ({
      next: !state.next,
      selected: !state.selected,
    }));
  }

  nextQuestion(limit) {
    this.setState((state) => ({
      index: state.index + (1 % limit),
    }));
  }

  render() {
    const { data } = this.props;
    const { index, next, selected } = this.state;
    if (data) {
      return (
        <div className="flexbox">
          <Navbar />
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

Game.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Game);
