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

export function queryGem(name) {
  return {
    type: 'QUERY_GEM',
    name
  }
}

export function addGem(name, url, info) {
  return {
    type: 'ADD_GEM',
    name,
    url,
    info
  }
}

export function removeGem() {
  return {
    type: 'REMOVE_GEM'
  }
}
