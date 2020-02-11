import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Form from '../Form/Form'
import Areas from '../Areas/Areas'
import AreaListing from '../AreaListing/AreaListing';
import Listing from '../Listing/Listing';
import ListingsContainer from '../ListingsContainer/ListingsContainer'
import Greeting from '../Greeting/Greeting';
import Error from '../Error/Error';
import FavoriteListing from '../FavoriteListing/FavoriteListing';
import { getAreas, getListings, resolvePromises, getIndividualListings } from '../../apiCalls'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      purpose: '',
      areas: '',
      listings: '',
      error: false,
      userFavorites: []
    }
  }

  addToFavorites = (listing) => {
    if(!this.state.userFavorites.includes(listing)) {
      this.setState({ userFavorites: [...this.state.userFavorites, listing] })
    }
  }

    componentDidMount() {
    getAreas()
      .then(areas => {
        const areaPromises = areas.areas.map(area => {
        return getListings(area)
          .then(data => {
            return {
              shortName: area.area,
              ...data
            }
          })
          .catch(error => this.state.error = error)
        })
        resolvePromises(areaPromises)
        .then(areaValues => {
          const listingsObj = areaValues.reduce((acc, area) => {
            acc[area.name] = area.listings
            return acc
          }, {})
          this.setState({areas: areaValues, listings: listingsObj})
          let values = Object.values(this.state.listings)
          let allListings = []
          let fetchedListings  = values.map(value => {
            let individualListing = value.map(areaListings => {
              getIndividualListings(areaListings)
              .then(data => {
                allListings.push(data)
                this.setState({listings: allListings});
              })
            })
          })
        })
      })
    }

    updateUserInfo = (user, purpose) => {
      this.setState({ user })
      this.setState({ purpose })
    }

    removeFromFavorites = (newFavorites) => {
      this.setState({userFavorites: newFavorites})
    }

    render() {
      if (this.state.error) {
        return (
          <Error errorMessage={this.state.error} />
        )
      } else if (!this.state.areas || !this.state.listings.length) {
        return (
          <h1>LOADING . . .</h1>
          )
        } else {
    return (
      <main className='App-main'>
        <header className='App-header'>
          <div className='icon'></div>
          <h1 className='App-heading'>Denver Endeavours</h1>
        </header>
        <Greeting user={this.state.user} purpose={this.state.purpose} userFavorites={this.state.userFavorites} />
        <Route exact path='/' render={() => <Form updateUserInfo={this.updateUserInfo} />} />
        <Route exact path='/areas' render={() => <Areas areasData={this.state.areas} />}/>
        <Route exact path='/areas/:area_id/listings' render={({match}) => {
          const areaId = match.params.area_id
          const filteredListings = this.state.listings.filter(listing => {
            return listing.area_id === parseInt(areaId)
          })
          return <ListingsContainer listings={filteredListings} id={areaId}/>
          }} />
        <Route exact path='/areas/:area_id/listings/:listing_id' render={({match}) => {
          let matchedListing = this.state.listings.find(listing => parseInt(match.params.listing_id) === listing.listing_id)
          return <Listing matched={matchedListing} userFavorites={this.state.userFavorites} removeFromFavorites={this.removeFromFavorites} addToFavorites={this.addToFavorites}/>
          }
        }  />
        <Route exact path='/favorites' render={() => <FavoriteListing userFavorites={this.state.userFavorites} removeFromFavorites={this.removeFromFavorites} /> }/>
      </main>
    )};
  }
}
