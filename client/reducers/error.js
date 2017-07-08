function error(state={}, action) {
  switch(action.type) {
    case "TOGGLE_ERROR_ON":
      return {
        ...state,
        error: true
      }

    case "TOGGLE_ERROR_OFF":
      return {
        ...state,
        error: false
      }

    default:
      return state;
  }
}

export default error;

