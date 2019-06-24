import React from "react";
import "../styles/result.scss";
import { Link } from "react-router-dom";

export default function Results(props) {
  return (
    <div>
      <h3>VACATION QUIZ</h3>
      <h1>Results</h1>
      <div className="score-content">
        <div className="finish-icon">icon</div>
        <h1>Your Score</h1>
        <div className="total-score">{`${props.location.state.score} pts`}</div>
        <div className="finish-button">
          <Link to="/">Finish</Link>
        </div>
      </div>
    </div>
  );
}
