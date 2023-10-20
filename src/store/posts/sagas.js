import { takeLatest, call, put } from "redux-saga/effects";
import {
  GET_POST_ACTION,
  getPostFailureAction,
  getPostSuccessAction,
} from "./action";
import { getPostApi } from "../../api";

export function* getPostSaga() {
  try {
    const response = yield call(getPostApi);

    yield put(getPostSuccessAction(response));
  } catch (error) {
    yield put(getPostFailureAction(error));
  }
}

export default [takeLatest(GET_POST_ACTION, getPostSaga)];
