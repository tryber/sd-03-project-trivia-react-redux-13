import React from "react";
import { connect } from "react-redux";
import "./style.css";
import { requestFetch } from "../../action";
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
      index: state.index + 1 % limit,
    }))
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { data } = this.props;
    const { index } = this.state;
    if(data !== undefined) return (
      <div className="flexbox">
        <Navbar />
        <Question data={data[index]}/>
        <AnswerButtons data={data[index]} />
        <button type="button" className="button" onClick={() => this.nextQuestion(data.length)}>
          PRÓXIMA PERGUNTA
        </button>
      </div>
    );
    return <p>Loading...</p>
  }
}

const mapStateToProps = (state) => ({
  data: state.request.data,
});

const mapDispacthToProps = (dispatch) => ({
  getData: () => dispatch(requestFetch()),
});

export default connect(mapStateToProps, mapDispacthToProps)(Game);
