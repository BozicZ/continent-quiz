import { put, call, delay } from "redux-saga/effects";

export function* fetchQuizData() {
  try {
    // Async call here
    yield delay(5000);
    yield put({
      type: "FETCH_QUIZ_DATA_COMPLETE",
      payload: { loading: false, questions: "Fetched questions" }
    });
  } catch (error) {
    yield put({
      type: "FETCH_QUIZ_DATA_ERROR",
      payload: { loading: false, errMsg: "Fetching quiz questions failed!" }
    });
  }
}
