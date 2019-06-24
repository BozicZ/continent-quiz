import React from "react";
import "../styles/result.scss";
import { Link } from "react-router-dom";

const handleLocalStorage = (score, date) => {
  let scores = JSON.parse(localStorage.getItem("topScores"));
  if (scores) {
    let newScores = [...scores, { score, date }];
    newScores.sort(function(a, b) {
      return b.score - a.score;
    });
    localStorage.setItem("topScores", JSON.stringify(newScores));
  } else {
    localStorage.setItem("topScores", JSON.stringify([{ score, date }]));
  }
};

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
          <Link
            to="/"
            onClick={() => {
              const date = new Date();
              handleLocalStorage(props.location.state.score, date.getTime());
            }}
          >
            Finish
          </Link>
        </div>
      </div>
    </div>
  );
}
