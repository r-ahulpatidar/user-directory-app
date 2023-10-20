import { takeLatest, call, put } from "redux-saga/effects";
import {
  GET_COUNTRY_LIST_ACTION,
  getCountryListFailureAction,
  getCountryListSuccessAction,
} from "./action";
import { getCountriesApi } from "../../api";

export function* getCountriesSaga() {
  try {
    const response = yield call(getCountriesApi);

    yield put(getCountryListSuccessAction(response));
  } catch (error) {
    yield put(getCountryListFailureAction(error));
  }
}

export default [takeLatest(GET_COUNTRY_LIST_ACTION, getCountriesSaga)];
