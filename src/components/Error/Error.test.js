import React from 'react';
import  { shallow } from 'enzyme';
import Error from './Error';

describe('Error', () => {
  it('should match the snapshot with all the data passed in correctly', () => {

    const wrapper = shallow(<Error
      errorMessage='There was an error retrieving your data !'
    />)
    expect(wrapper).toMatchSnapshot();
  })
})
