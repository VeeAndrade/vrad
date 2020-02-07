import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Form from '../Form/Form'
import Areas from '../Areas/Areas'
import AreaListing from '../AreaListing/AreaListing'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      purpose: '',
      areas: '',
      listings: ''
    }
  }

    componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(areas => {
        const areaPromises = areas.areas.map(area => {
        return fetch('http://localhost:3001' + area.details)
          .then(res => res.json())
          .then(data => {
            return {
              shortName: area.area,
              ...data
            }
          })
          .catch(error => console.log(error))
        })
        Promise.all(areaPromises)
        .then(areaValues => {
          const listingsObj = areaValues.reduce((acc, area) => {
            acc[area.name] = area.listings
            return acc
          }, {})
          this.setState({areas: areaValues, listings: listingsObj})
        })
    })
  }

  updateUserInfo = (user, purpose) => {
    this.setState({ user })
    this.setState({ purpose })
  }

  render() {
    if (!this.state.areas) {
      return (
        <h1>LOADING...</h1>
      )
    } else {
    return (
      <main className='App-main'>
        <header className='App-header'>
          <div className='icon'></div>
          <h1 className='App-heading'>Denver Endeavours</h1>
        </header>
        <Route exact path='/' component={Form} />
        <Route exact path='/areas' render={() => <Areas areasData={this.state.areas} />}/>
        <Route exact path='/areas/:area_id' render={({match}) => {
          const areaId = match.params.area_id
          const selectedArea = this.state.areas.find(area => area.id === parseInt(areaId))
          return <AreaListing listings={this.state.listings[selectedArea.name]} id={areaId}/>
          }} />
      </main>
    )};
  }
}
