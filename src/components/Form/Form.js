import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
   updateUserInfo = (user, purpose) => {
    this.setState({ user })
    this.setState({ purpose })
  }

  validateUser = e => {
    if(!this.state.user || !this.state.purpose || !this.state.email) {
      window.alert('You must fill out all fields')
    } else {
      this.updateUserInfo(this.state.user, this.state.purpose);
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          value={this.state.title}
          name='user'
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          onChange={this.handleChange}
        />
        <select name='purpose' onChange={this.handleChange}>
          <option value="">Select one--</option>
          <option value='Vacation'>Vacation</option>
          <option value='Business'>Business</option>
          <option value='Other'>Other</option>
        </select>
        <Link onClick={this.validateUser} to={{pathname:'/areas', state:{user: this.state.user, purpose: this.state.purpose}}}>
          Continue
        </Link>
      </form>
    )
  }
}
