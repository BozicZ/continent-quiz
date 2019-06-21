import React from "react";
import "../styles/home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  const scores = [
    { date: "on 06/13/2019", score: "2,300 pts" },
    { date: "on 06/16/2019", score: "1,900 pts" },
    { date: "on 06/09/2019", score: "900 pts" }
  ];
  return (
    <div>
      <h3>CONTINENT QUIZ</h3>
      <h1>Your Scores</h1>
      <div>
        {scores.map((item, index) => (
          <div className="score-item">
            <div className="score-index ">#{index + 1}</div>
            <div>
              <h3>{item.date}</h3>
              <h2>{item.score}</h2>
            </div>
          </div>
        ))}
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
