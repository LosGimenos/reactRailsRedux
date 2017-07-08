import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/actionCreators';
import Favorites from '../favorites.jsx';

function mapStateToProps(state) {
  const { gem, favorites, error } = state;

  return {
    gem,
    favorites,
    error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const FavoritesConnector = connect(
  mapStateToProps,
  mapDispatchToProps
  )(Favorites);

export default FavoritesConnector;
