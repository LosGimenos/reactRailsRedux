import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import favorites from './favorites.js';
import gem from './gem.js';
import error from './error.js';

const rootReducer= combineReducers({
  favorites,
  gem,
  error,
  routing: routerReducer
});

export default rootReducer;
