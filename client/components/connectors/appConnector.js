import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/actionCreators';
import App from '../app.jsx';

function mapStateToProps(state) {
  const { gem, favorites, error, searched } = state;

  return {
    gem,
    favorites,
    error,
    searched
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const AppConnector = connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);

export default AppConnector;
