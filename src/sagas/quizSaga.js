import { put, call } from "redux-saga/effects";
import API from "../api";

export function* fetchQuizData() {
  try {
    const questions = yield call(API.get, "/bins/a6da9");
    yield put({
      type: "FETCH_QUIZ_DATA_COMPLETE",
      payload: { loading: false, questions }
    });
  } catch (error) {
    yield put({
      type: "FETCH_QUIZ_DATA_ERROR",
      payload: { loading: false, errMsg: "Fetching quiz questions failed!" }
    });
  }
}
