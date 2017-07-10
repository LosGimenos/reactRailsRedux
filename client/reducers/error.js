function error(state={}, action) {
  switch(action.type) {
    case "TOGGLE_ERROR_ON":
      return true

    case "TOGGLE_ERROR_OFF":
      return false

    default:
      return state;
  }
}

export default error;

