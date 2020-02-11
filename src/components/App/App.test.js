import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
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
    const mockListings = [{
      listing_id: 3,
      area_id: 590,
      name: "Hip RiNo Party Spot",
      address: {
        street: "2250 Lawrence St",
        zip: "80205"
      },
      details: {
        neighborhood_id: 5124122,
        superhost: true,
        seller_source: "91jss1",
        beds: 3,
        baths: 2.5,
        cost_per_night: 420,
        features: [
          "hot tub",
          "espresso machine"
        ],
      },
      dev_id: "u4gh2j",
      area: "rino",
      db_connect: 834470
    }]
    wrapper = shallow(<App user='Vee' purpose='Vacation' areas={mockAreasData} listings={mockListings} error={false} userFavorites={[]} />)
  })

  it('should have default properties', () => {
    expect(wrapper.state('user')).toEqual('')
    expect(wrapper.state('purpose')).toEqual('')
    expect(wrapper.state('areas')).toEqual('')
    expect(wrapper.state('listings')).toEqual('')
    expect(wrapper.state('userFavorites')).toEqual([])
  });

  it('should be able to add to favorites', () => {
    const mockFav = {}
    wrapper.instance().addToFavorites(mockFav)
    expect(wrapper.state('userFavorites')).toEqual([{}])
  });

  it('should be able to remove favorites', () => {
    wrapper.instance().addToFavorites({0: 'favorite'})
    wrapper.instance().addToFavorites({1: 'superFav'})
    wrapper.instance().addToFavorites({2: 'leastFav'})
    expect(wrapper.state('userFavorites')).toEqual([{0: 'favorite'}, {1: 'superFav'}, {2: 'leastFav'}])
    wrapper.instance().removeFromFavorites([{0: 'favorite'}, {1: 'superFav'}])
    expect(wrapper.state('userFavorites')).toEqual([{0: 'favorite'}, {1: 'superFav'}])
  });

  it('should be able to update the user info', () => {
    wrapper.instance().updateUserInfo('Johnny', 'Vacation')
    expect(wrapper.state('user')).toEqual('Johnny')
    expect(wrapper.state('purpose')).toEqual('Vacation')
  });



})
