import { takeLatest, call, put } from "redux-saga/effects";
import {
  GET_USER_ACTION,
  getUserFailureAction,
  getUserSuccessAction,
} from "./action";
import { getUserApi } from "../../api";

export function* getUserSaga() {
  try {
    const response = yield call(getUserApi);

    yield put(getUserSuccessAction(response));
  } catch (error) {
    yield put(getUserFailureAction(error));
  }
}

export default [takeLatest(GET_USER_ACTION, getUserSaga)];
