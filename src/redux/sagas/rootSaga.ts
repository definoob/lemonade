import { all, fork } from 'redux-saga/effects';
import eventsSaga from './eventsSaga';

export default function* root() {
  yield all([fork(eventsSaga)]);
}
