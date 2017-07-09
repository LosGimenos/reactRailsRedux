import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import request from 'superagent';

export function* createGemAsync(action) {
  try {
    const response = yield call(
                             request.get,
                             'http://localhost:3000/api/v1/gems',
                             {"query": action.name});

    const jsonResponse = JSON.parse(response.text);
    const name = jsonResponse.name;
    const url = jsonResponse.project_uri;
    const info = jsonResponse.info;

    yield put({type: "ADD_GEM", name, url, info})

  } catch(e) {
    yield put({type: "TOGGLE_ERROR_ON"})
  }
}

export function* watchCreateGem() {
  yield takeEvery("QUERY_GEM", createGemAsync);
}

export default function* rootSaga() {
  yield [
    watchCreateGem()
  ]
}
