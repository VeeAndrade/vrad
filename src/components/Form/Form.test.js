import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from 'enzyme'

describe('Form', () => {
  let wrapper;
  const mockUpdateUserInfo = jest.fn();
  
  beforeEach(() => {
    wrapper = shallow(<Form updateUserInfo={mockUpdateUserInfo} />)
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should start with a default state', () => {
    expect(wrapper.state('user')).toEqual('')
    expect(wrapper.state('purpose')).toEqual('')
  });
  
  it('should update the state when handleChange is called', () => {
    const expectedName = 'Johnny'
    const expectedPurpose = 'Vacation'
    const mockEvent1 = {
      target: {
        name: 'user',
        value: 'Johnny'
      }
    }

    const mockEvent2 = {
      target: {
        name: 'purpose',
        value: 'Vacation'
      }
    }
    wrapper.instance().handleChange(mockEvent1)
    expect(wrapper.state('user')).toEqual(expectedName)
    
    wrapper.instance().handleChange(mockEvent2)
    expect(wrapper.state('purpose')).toEqual(expectedPurpose)
  });

  it('should be able to set the state', () => {
    wrapper.instance().updateUserInfo('Vee', 'Vacation')
    expect(wrapper.state('user')).toEqual('Vee')
    expect(wrapper.state('purpose')).toEqual('Vacation')
  });
})