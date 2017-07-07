function gemDependencies(state=[], action) {
  switch(action.type) {
    case "ADD_DEPENDENCIES":
      return [
      ]

    default:
      return state;
  }
}

function gems(state={}, action) {
  switch(action.type) {
    case "ADD_GEM":
      return {
        name: action.name,
        url: action.url,
        favorited: false
      }

    default:
      return state;
  }
}

export default gems;
