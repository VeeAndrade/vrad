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
    const { updateUserInfo } = this.props;
    updateUserInfo(this.state.user, this.state.purpose);
  }

  render() {
    console.log(this.state);
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
        <div className="radio">
          <label>
            <input type="radio" value='Vacation' name='purpose' onChange={this.handleChange} />
            Vacation
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value='Business' name='purpose' onChange={this.handleChange} />
            Business
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value='Other' name='purpose' onChange={this.handleChange} />
            Other
          </label>
        </div>
        <button onClick={this.validateUser}>
          Log In!
        </button>
      </form>
    )
  }
}
