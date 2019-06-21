import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "..//App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch({
      type: "ADD_QUESTIONS_STARTED"
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.quiz.questions !== this.props.quiz.questions) {
      console.log("quiz state changed ", this.props.quiz);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/quiz/">Quiz</Link>
            </li>
            <li>
              <Link to="/results/">Results</Link>
            </li>
          </ul>
        </nav>
        {children}
      </div>
    );
  }
}

const mapStateToProps = ({ quiz }) => {
  return {
    quiz
  };
};

export default connect(mapStateToProps)(App);
