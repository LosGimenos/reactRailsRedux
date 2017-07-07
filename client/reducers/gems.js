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
        favorited: false,
        searched: true
      }

    case "QUERY_GEM":
      return {
        name: action.name
      }

    default:
      return state;
  }
}

export default gems;
