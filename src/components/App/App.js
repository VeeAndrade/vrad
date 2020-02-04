import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import Greeting from '../Greeting/Greeting'

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
          <Greeting user={this.state.user} purpose={this.state.purpose} />
        </header>
        <Form updateUserInfo={this.updateUserInfo} />
      </main>
    );
  }
}
