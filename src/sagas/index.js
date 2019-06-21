import { fork } from "redux-saga/effects";
import watchFeatures from "./watcher";

export default function* allSagas() {
  yield fork(watchFeatures);
}
