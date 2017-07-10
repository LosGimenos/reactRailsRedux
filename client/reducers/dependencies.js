function dependencies(state={}, action) {
  switch(action.type) {
    case "ADD_DEPENDENCIES_DATA":
      return action.dependenciesData

    case "CLEAR_DEPENDENCIES":
      return {}

    default:
      return state
  }
}

export default dependencies;
