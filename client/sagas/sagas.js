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
    const dependenciesObject = jsonResponse.dependencies;

    yield put({type: "FETCH_DEPENDENCIES", dependenciesObject})
    yield put({type: "ADD_GEM", name, url, info})

  } catch(e) {
    yield put({type: "TOGGLE_ERROR_ON"})
  }
}

export function* fetchDependencies(action) {
  try {
    const { dependenciesObject } = action;
    const dependencyNames = [];
    const keys = Object.keys(dependenciesObject);
    for (let i = 0; i < keys.length; i++) {
      for (let j = 0; j < dependenciesObject[keys[i]].length; j++) {
        dependencyNames.push(dependenciesObject[keys[i]][j].name);
      }
    }

    yield put({type: "GET_DATA_DEPENDENCIES", dependencyNames});
    yield put({type: "ADD_GEM_DEPENDENCIES", dependencyNames});
  } catch(e) {

  }
}

export function* getDataDependencies(action) {
  try {
    const { dependencyNames } = action;
    const dependenciesData = {};

    for (let i = 0; i < dependencyNames.length; i++) {
      const response = yield call(
                             request.get,
                             'http://localhost:3000/api/v1/gems',
                             {"query": dependencyNames[i]} );

      const jsonResponse = JSON.parse(response.text);
      const name = jsonResponse.name;
      const url = jsonResponse.project_uri;

      dependenciesData[name] = {
        url,
        favorited: false
      }
    }

    yield put({type: "ADD_DEPENDENCIES_DATA", dependenciesData});
  } catch(e) {
      console.log('nope', e);
  }

}

export function* watchCreateGem() {
  yield takeEvery("QUERY_GEM", createGemAsync);
}

export function* watchFetchDependencies() {
  yield takeEvery("FETCH_DEPENDENCIES", fetchDependencies);
}

export function* watchGetDataDependencies() {
  yield takeEvery("GET_DATA_DEPENDENCIES", getDataDependencies);
}

export default function* rootSaga() {
  yield [
    watchCreateGem(),
    watchFetchDependencies(),
    watchGetDataDependencies()
  ]
}
