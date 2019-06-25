import React, { Component } from "react";
import { connect } from "react-redux";

import "..//App.scss";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.quiz.questions !== this.props.quiz.questions) {
      const randomIndexes = setRandomIndexes(
        this.props.quiz.questions.length,
        5
      );
      const randomQuestions = randomIndexes.map(
        item => this.props.quiz.questions[item]
      );
      this.props.dispatch({
        type: "SET_RANDOM_QUESTIONS",
        payload: randomQuestions
      });
    }
  }

  render() {
    const { children } = this.props;

    return <div className="app-container">{children}</div>;
  }
}

const mapStateToProps = ({ quiz }) => {
  return {
    quiz
  };
};

export default connect(mapStateToProps)(App);
