function gemDependencies(state=[], action) {
  switch(action.type) {
    case "ADD_DEPENDENCIES":
      return [
      ]

    default:
      return state;
  }
}

function gem(state={}, action) {
  switch(action.type) {
    case "ADD_GEM":
      return {
        ...state,
          name: action.name,
          url: action.url,
          info: action.info,
          favorited: false,
      }

    case "REMOVE_GEM":
      return {
        ...state,
          name: '',
          info: '',
          url: ''
      }

    case "QUERY_GEM":
      return {
          name: action.name
      }

    default:
      return state;
  }
}

export default gem;
