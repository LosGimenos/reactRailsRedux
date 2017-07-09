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
    const dependencies = jsonResponse.dependencies;

    yield put({type: "FETCH_DEPENDENCIES", dependencies})
    yield put({type: "ADD_GEM", name, url, info})

  } catch(e) {
    yield put({type: "TOGGLE_ERROR_ON"})
  }
}

export function* fetchDependencies(action) {
  try {
    const dependenciesObject = action.dependencies;
    const dependencyNames = [];
    const keys = Object.keys(dependenciesObject);
    for (let i = 0; i < keys.length; i++) {
      for (let j = 0; j < dependenciesObject[keys[i]].length; j++) {
        dependencyNames.push(dependenciesObject[keys[i]][j].name);
      }
    }

    yield put({type: "ADD_GEM_DEPENDENCIES", dependencyNames})
  } catch(e) {

  }
}

export function* watchCreateGem() {
  yield takeEvery("QUERY_GEM", createGemAsync);
}

export function* watchFetchDependencies() {
  yield takeEvery("FETCH_DEPENDENCIES", fetchDependencies)
}

export default function* rootSaga() {
  yield [
    watchCreateGem(),
    watchFetchDependencies()
  ]
}
