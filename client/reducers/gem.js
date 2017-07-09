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

    case "ADD_GEM_DEPENDENCIES":
    console.log('reducer', state, action.dependencyNames)
      return {
        ...state,
        dependenciesList: action.dependencyNames
      }

    default:
      return state;
  }
}

export default gem;
