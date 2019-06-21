import { takeLatest } from "redux-saga/effects";
import { fetchQuizData } from "./quizSaga";

export default function* watchFeatures() {
  yield takeLatest("ADD_QUESTIONS_STARTED", fetchQuizData);
}
