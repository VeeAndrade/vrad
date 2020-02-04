import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      purpose: ''
    }
  }

  updateUserInfo = (user, purpose) => {
    this.setState({ user })
    this.setState({ purpose })
  }

  render() {
    return (
      <main className='App-main'>
        <header className='App-header'>
          <div className='icon'></div>
          <h1>VRAD: NEW NAME COMING SOON</h1>
          <article className='user-info'>
            <p>
              Hello, {this.state.user}. You've chosen {this.state.purpose} as your
                reason for being here!
            </p>
          </article>
        </header>
        <Form updateUserInfo={this.updateUserInfo} />
      </main>
    );
  }
}
