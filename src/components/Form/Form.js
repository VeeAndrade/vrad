import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      purpose: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  validateUser = e => {
    e.preventDefault();
    if(!this.state.user || !this.state.purpose || !this.state.email) {
      window.alert('You must fill out all fields')
    } else {
      const { updateUserInfo } = this.props;
      updateUserInfo(this.state.user, this.state.purpose);
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='enter username'
          value={this.state.title}
          name='user'
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='enter email'
          name='email'
          onChange={this.handleChange}
        />
        <select name='purpose' onChange={this.handleChange}>
          <option value="">Select one--</option>
          <option value='Vacation'>Vacation</option>
          <option value='Business'>Business</option>
          <option value='Other'>Other</option>
        </select>
        <button onClick={this.validateUser}>
          Log In!
        </button>
      </form>
    )
  }
}
