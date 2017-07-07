import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import favorites from './favorites.js';
import gems from './gems.js';

const rootReducer= combineReducers({
  favorites,
  gems,
  routing: routerReducer
});

export default rootReducer;
