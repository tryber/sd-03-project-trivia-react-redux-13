import React from 'react';
import PropTypes from 'prop-types';
import randomicQuestions from './randomicQuestions';
import './style.css';
import Button from './Button';

class AnswersButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomizedAnswers: '',
      currentQuestion: '',
    };
  }

  componentDidUpdate() {
    const { data, update, selected } = this.props;
    const { correct_answer: correctAnswer, incorrect_answers: incorrectAnswers } = data;
    const { randomizedAnswers, currentQuestion } = this.state;
    const answers = [correctAnswer, ...incorrectAnswers];
    if (!randomizedAnswers || currentQuestion !== data.question) {
      const randomized = randomicQuestions(answers).map((result) => {
        let index = 0;
        if (result !== correctAnswer) index += 1;
        return (
          <Button
            index={index}
            correctAnswer={correctAnswer}
            result={result}
            key={result}
            update={update}
            selected={selected}
          />
        );
      });
      this.setState({
        currentQuestion: data.question,
        randomizedAnswers: randomized,
      });
    }
  }

  render() {
    return <div>{this.state.randomizedAnswers}</div>;
  }
}

AnswersButtons.propTypes = {
  data: PropTypes.shape({
    typeData: PropTypes.object,
  }),
  update: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default AnswersButtons;
