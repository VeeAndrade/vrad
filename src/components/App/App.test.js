import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<App />)
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

  it('should be able to update the user info', () => {
    wrapper.instance().updateUserInfo('Johnny', 'Vacation')
    expect(wrapper.state('user')).toEqual('Johnny')
    expect(wrapper.state('purpose')).toEqual('Vacation')
  });



})
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
