function dependencies(state=[], action) {
  switch(action.type) {
    case "FETCH_DEPENDENCIES":
      return action.dependencies

    default:
      return state
  }
}

export default dependencies;
