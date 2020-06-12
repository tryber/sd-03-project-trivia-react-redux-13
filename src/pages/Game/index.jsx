import React from "react";
import { connect } from "react-redux";
import "./style.css";
import Navbar from "../../components/Navbar";
import Question from "../../components/Question";
import AnswerButtons from "../../components/AnswerButtons";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  nextQuestion(limit) {
    this.setState((state) => ({
      index: state.index + (1 % limit),
    }));
  }

  render() {
    const { data } = this.props;
    const { index } = this.state;
    return (
      <div className="flexbox">
        <Navbar />
        <Question data={data[index]} />
        <AnswerButtons data={data[index]} />
        <button
          type="button"
          className="button"
          onClick={() => this.nextQuestion(data.length)}
        >
          PRÓXIMA PERGUNTA
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.request.data,
});

export default connect(mapStateToProps)(Game);
