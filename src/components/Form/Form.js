import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import './Form.css'


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
      this.props.updateUserInfo(this.state.user, this.state.purpose);
    }
  }

  render() {
    return (
      <form className='user-input-form'>
        <input
          className='username-input'
          type='text'
          placeholder='Name'
          value={this.state.title}
          name='user'
          onChange={this.handleChange}
        />
        <input
          className = 'useremail-input'
          type='email'
          placeholder='Email'
          name='email'
          onChange={this.handleChange}
          required
        />
        <section className='purpose-section'>
        <label className='purpose-label'>Reason for trip: </label>
        <select name='purpose' className='purpose-selection' onChange={this.handleChange}>
          <option value="">Select one--</option>
          <option value='Vacation'>Vacation</option>
          <option value='Business'>Business</option>
          <option value='Other'>Other</option>
        </select>
        </section>
        <Link className='continue-btn' onClick={this.validateUser} to={() => {
          if (!this.state.user || !this.state.purpose || !this.state.email) {
            return '/'
          } else {
            return '/areas'
          }
        }}>
          Continue
        </Link>
      </form>
    )
  }
}

Component.propTypes = {
  user: PropTypes.string,
  purpose: PropTypes.string
}