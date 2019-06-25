import { takeLatest } from "redux-saga/effects";
import { fetchQuizData } from "./quizSaga";
import { ADD_QUESTIONS_STARTED } from "../constants/actionsConstants";

export default function* watchFeatures() {
  yield takeLatest(ADD_QUESTIONS_STARTED, fetchQuizData);
}
