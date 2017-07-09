import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import favorites from './favorites.js';
import gem from './gem.js';
import error from './error.js';
import dependencies from './dependencies.js';

const rootReducer= combineReducers({
  favorites,
  gem,
  error,
  dependencies,
  routing: routerReducer
});

export default rootReducer;
