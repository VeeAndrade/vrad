import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Form from '../Form/Form'
import Area from '../Areas/Areas'

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
        </header>
        <Route exact path='/' component={Form} />
        <Route exact path='/areas' component={Area}/>
      </main>
    );
  }
}
