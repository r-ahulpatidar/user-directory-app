import { all } from "redux-saga/effects";
import userSaga from "./users/sagas";
import postSaga from "./posts/sagas";
import countrySaga from "./country-list/sagas";

export default function* rootSaga() {
  yield all([...userSaga, ...postSaga, ...countrySaga]);
}
