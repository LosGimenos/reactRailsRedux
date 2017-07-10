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

export function toggleErrorOff() {
  return {
    type: "TOGGLE_ERROR_OFF"
  }
}

export function addGemDependencies(dependencyNames) {
  return {
    type: "ADD_GEM_DEPENDENCIES",
    dependencyNames
  }
}

export function addDependenciesData(dependenciesData) {
  return {
    type: "ADD_DEPENDENCIES_DATA",
    dependenciesData
  }
}

export function clearDependencies() {
  return {
    type: "CLEAR_DEPENDENCIES"
  }
}
