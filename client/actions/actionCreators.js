export function addFavorite(name, url) {
  return {
    type: 'ADD_FAVORITE',
    name,
    url
  };
}

export function removeFavorite(index) {
  return {
    type: 'REMOVE_FAVORITE',
    index
  };
}

export function addGem(name, url, dependencies) {
  return {
    type: 'ADD_GEM',
    name,
    url,
    dependencies
  }
}
