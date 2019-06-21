import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/quiz.scss";
import { Redirect } from "react-router-dom";

const continentAnswers = correct => {
  const continents = [
    "Africa",
    "Asia",
    "South America",
    "North America",
    "Europe",
    "Oceania",
    "Antarctica"
  ];
  let wrongAnswers = continents.filter(item => item !== correct);
  let wrongIndexes = setRandomIndexes(wrongAnswers.length, 2);
  return wrongIndexes.map(item => wrongAnswers[item]).concat([correct]);
};

const setRandomIndexes = (range, total) => {
  let count = 0;
  let randomNumbers = [];
  while (count < total) {
    let nextNumber = Math.floor(Math.random() * range);
    if (!randomNumbers.includes(nextNumber)) {
      randomNumbers.push(nextNumber);
      count++;
    }
  }
  return randomNumbers;
};
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      possibleAnswers: [],
      score: 0,
      isAnswerCorrect: "",
      answerLocked: false
    };

    this.submitAnswer = this.submitAnswer.bind(this);
    this.onSelectAnswer = this.onSelectAnswer.bind(this);
  }

  componentDidMount() {
    if (this.props.questions) {
      this.setState({
        possibleAnswers: continentAnswers(this.props.questions[0].continent)
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.questions !== prevProps.questions) {
      this.setState({
        possibleAnswers: continentAnswers(this.props.questions[0].continent)
      });
    }
    if (
      prevState.questionNumber !== this.state.questionNumber &&
      this.state.questionNumber < 5
    ) {
      this.setState({
        possibleAnswers: continentAnswers(
          this.props.questions[this.state.questionNumber].continent
        )
      });
    }
  }

  onSelectAnswer(answer) {
    if (this.state.answerLocked) {
      this.props.questions[this.state.questionNumber].continent === answer
        ? this.setState({
            isAnswerCorrect: "correct",
            score: this.state.score + 750,
            answerLocked: true
          })
        : this.setState({
            isAnswerCorrect: "incorrect",
            answerLocked: true
          });
    }
  }

  submitAnswer() {
    this.setState({
      isAnswerCorrect: "",
      answerLocked: false,
      questionNumber: this.state.questionNumber + 1
    });
  }

  render() {
    return this.state.questionNumber === 5 ? (
      <Redirect to="/results/" />
    ) : (
      <div>
        <h3>CONTINENT QUIZ</h3>
        <h1>{`Question ${this.state.questionNumber + 1} of 5`}</h1>
        <div className="questions-body">
          <div className="question-image">
            {this.props.questions ? (
              <img
                alt={`continent ${this.state.questionNumber}`}
                src={this.props.questions[this.state.questionNumber].image}
              />
            ) : (
              <p>loading...</p>
            )}
          </div>
          <div>
            {this.state.possibleAnswers ? (
              this.state.possibleAnswers.map(item => (
                <div onClick={() => this.onSelectAnswer(item)} key={item}>
                  {item}
                </div>
              ))
            ) : (
              <div>loading...</div>
            )}
          </div>
          <div className="next-button" onClick={this.submitAnswer}>
            NEXT
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quiz }) => {
  return {
    questions: quiz.randomQuestions
  };
};

export default connect(mapStateToProps)(Quiz);
