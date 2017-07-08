import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas.js';

import rootReducer from './reducers/index.js';

const sagaMiddleware = createSagaMiddleware();
const defaultState = {
   favorites: [],
   gem: {
     name: '',
     url: '',
     info: '',
     favorited: false,
     dependencies: []
   },
   dependency: {
     name: '',
     url: '',
     favorited: false
   },
   error: false
};

const store = createStore(
                rootReducer,
                defaultState,
                applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
