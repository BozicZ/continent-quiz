import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import myRootReducer from "./reducers";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.scss";

const store = createStore(myRootReducer);

function Home() {
  return <h2>Home</h2>;
}

function Quiz() {
  return <h2>Quiz</h2>;
}

function Results() {
  return <h2>Results</h2>;
}

function App() {
  return (
    <Provider store={store}>
      <Router>
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

          <Route path="/" exact component={Home} />
          <Route path="/quiz/" component={Quiz} />
          <Route path="/results/" component={Results} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
