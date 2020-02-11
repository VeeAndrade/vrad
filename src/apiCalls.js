export const getAreas = () => {
  return fetch('http://localhost:3001/api/v1/areas')
    .then(response => {
      if (!response.ok) {
        throw Error('Error getting areas')
      }
      return response.json()
    })
}

export const getListings = (area) => {
  return fetch('http://localhost:3001' + area.details)
    .then(response => {
      if (!response.ok) {
        throw Error('Error getting listings')
      }
      return response.json()
    })
}

export const resolvePromises = (areaPromises) => {
  return Promise.all(areaPromises)
}

export const getIndividualListings = (areaListings) => {
  return fetch('http://localhost:3001' + areaListings)
    .then(response => {
      if (!response.ok) {
        throw Error('Error getting that listing')
      }
      return response.json()
    })
}
