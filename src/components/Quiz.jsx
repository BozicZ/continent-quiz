import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/quiz.scss";
import { Redirect } from "react-router-dom";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { questionNumber: 0 };

    this.submitAnswer = this.submitAnswer.bind(this);
  }

  submitAnswer() {
    this.setState({ questionNumber: this.state.questionNumber + 1 });
  }

  render() {
    return this.state.questionNumber === 5 ? (
      <Redirect to="/results/" />
    ) : (
      <div>
        <h3>CONTINENT QUIZ</h3>
        <h1>Question 1 of 5</h1>
        <div className="questions-body">
          <div className="question-image">
            <img src={this.props.questions[this.state.questionNumber].image} />
          </div>
          <div>
            <div>q1</div>
            <div>q2</div>
            <div>q3</div>
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
