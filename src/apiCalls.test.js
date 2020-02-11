import { getAreas, getListings, resolvePromises, getIndividualListings } from './apiCalls'

describe('getAreas', () => {

  const mockAreasData = [{
      area: "RiNo",
      details: '/api/v1/areas/590'
    },
    {
      area: "Park Hill",
      details: '/api/v1/areas/751'
    },
    {
      area: "LoHi",
      details: '/api/v1/areas/408'
    },
    {
      area: "Cap Hill",
      details: '/api/v1/areas/240'
    }
  ]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({ ok: true, json: () => Promise.resolve(mockAreasData) })
    })
  })

  it('should call fetch with the correct URL', () => {
    getAreas()
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/areas')
  })

  it('should return an array of areas', () => {
    getAreas()
      .then(areas => expect(areas).toEqual(mockAreasData))
  })

  it('should return an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Error getting areas'))
    })
    expect(getAreas()).rejects.toEqual(Error('Error getting areas'))
  })
})

describe('getListings', () => {

  const mockListingsData = {
      area: "RiNo",
      details: '/api/v1/areas/590'
    }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({ ok: true, json: () => Promise.resolve(mockListingsData) })
    })
  })

  it('should call fetch with the correct URL', () => {
    getListings(mockListingsData)
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/areas/590')
  })

  it('should return an array of listings', () => {
    getListings(mockListingsData)
      .then(listings => expect(listings).toEqual(mockListingsData))
  })

  it('should return an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Error getting listings'))
    })
    expect(getListings(mockListingsData)).rejects.toEqual(Error('Error getting listings'))
  })
})

describe('getIndividualListings', () => {

  const mockListingURL = '/api/v1/listings/3'
  const mockListing = {
      listing_id: 3,
      area_id: 590,
      name: 'Hip RiNo Party Spot',
      address: {
        street: '2250 Lawrence St',
        zip: '80205'
      },
      details: {
        neighborhood_id: 5124122,
        superhost: true,
        seller_source: '91jss1',
        beds: 3,
        baths: 2.5,
        cost_per_night: 420,
        features: [
          'hot tub',
          'espresso machine'
        ],
      },
      dev_id: 'u4gh2j',
      area: 'rino',
      db_connect: 834470
    }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({ ok: true, json: () => Promise.resolve(mockListing) })
    })
  })

  it('should call fetch with the correct URL', () => {
    getIndividualListings(mockListingURL)
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/listings/3')
  })

  it('should return a listings', () => {
    getIndividualListings(mockListingURL)
      .then(listing => expect(listing).toEqual(mockListing))
  })

  it('should return an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Error getting that listing'))
    })
    expect(getIndividualListings(mockListingURL)).rejects.toEqual(Error('Error getting that listing'))
  })
})
