import React from 'react';
import { shallow } from 'enzyme'
import Areas from './Areas';

describe('Areas', () => {
  let wrapper;
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
    wrapper = shallow(<Areas areasData={mockAreasData} />)
  });

  it('should match the areas snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a default state', () => {
    expect(wrapper.state('areas')).toEqual(mockAreasData)
    expect(wrapper.state('listings')).toEqual('')
    expect(wrapper.state('userFavorites')).toEqual('')
  });
})