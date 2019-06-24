import React, { Component } from "react";
import "../styles/home.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.scores = JSON.parse(localStorage.getItem("topScores"));
    if (this.scores) {
      this.scores = this.scores.slice(0, 3);
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type: "ADD_QUESTIONS_STARTED"
    });
  }

  render() {
    return (
      <div>
        <h3>CONTINENT QUIZ</h3>
        <h1>Your Scores</h1>
        <div>
          {this.scores
            ? this.scores.map((item, index) => (
                <div key={index} className="score-item">
                  <div className="score-index ">#{index + 1}</div>
                  <div>
                    <h3>on {item.date}</h3>
                    <h2>{item.score} pts</h2>
                  </div>
                </div>
              ))
            : "No scores yet"}
        </div>
        <div className="bottom-section">
          <div className="home-button">icon</div>
          <div className="play-button">
            <div>icon</div>
            <h2>
              <Link to="/quiz/">Play</Link>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Home);
