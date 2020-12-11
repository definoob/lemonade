import { put, call, takeEvery, all, fork } from 'redux-saga/effects';

import { getDataFromGraphQL } from '../services/events';
import * as actionCreators from '../actionCreators';
import * as actionTypes from '../actionTypes';

function* getData({ longitude, latitude }: actionTypes.GetDataAction) {
  try {
    const data = yield call(getDataFromGraphQL, longitude, latitude);
    yield put(actionCreators.fetchSuccess(data));
  } catch (e) {
    yield put(actionCreators.fetchFailed());
  }
}

function* getEventsData() {
  yield takeEvery(actionTypes.GET_DATA, getData);
}

export default function* eventsSaga() {
  yield all([fork(getEventsData)]);
}
