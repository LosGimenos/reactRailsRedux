function favorites(state=[], action) {
  switch(action.type) {
    case "ADD_FAVORITE":
      console.log(action)
      return [
        ...state,
        {
          name: action.name,
          url: action.url,
          favorited: true,
        }
      ]

    case "REMOVE_FAVORITE":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]

    default:
      return state;
  }
}

export default favorites;
