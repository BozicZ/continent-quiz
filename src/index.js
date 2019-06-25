import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter as Router, Route } from "react-router-dom";
import myRootReducer from "./reducers";
import rootSaga from "./sagas";
import logger from "redux-logger";
import "./styles/index.scss";

import * as serviceWorker from "./serviceWorker";

import App from "./containers/App";
import Home from "./containers/Home";
import Quiz from "./containers/Quiz";
import Results from "./components/Results";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  myRootReducer,
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/" exact component={Home} />
        <Route path="/quiz/" component={Quiz} />
        <Route path="/results/" component={Results} />
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
