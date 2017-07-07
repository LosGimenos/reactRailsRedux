function gemDependencies(state=[], action) {
  switch(action.type) {
    case "ADD_DEPENDENCIES"
      return [
      ]
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
  }
}

export default gems;
