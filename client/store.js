import { createStore } from 'redux';

import rootReducer from './reducers/index.js';

const defaultState = {
   favorites: [],
   gem: {
     name: '',
     url: '',
     favorited: false,
     dependencies: []
   },
   dependency: {
     name: '',
     url: '',
     favorited: false
   },
   error: false,
   searched: false
};

const store = createStore(rootReducer, defaultState);

export default store;
