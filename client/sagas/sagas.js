import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import request from 'superagent';

export function* createGemAsync(action) {
  try {
    const response = yield call(
                             request.get,
                             'http://localhost:3000/api/v1/gems');
    console.log(response);
  } catch(e) {
    console.log('Request failed! Check this out: ', e);
  }
}

export function* watchCreateGem() {
  console.log('saga is running');
  yield takeEvery("QUERY_GEM", createGemAsync);
}

export default function* rootSaga() {
  yield [
    watchCreateGem()
  ]
}
