import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Greeting from '../Greeting/Greeting'
import AreaCard from '../AreaCard/AreaCard';
import AreaListing from '../AreaListing/AreaListing';
let route;

class Areas extends Component {
  constructor() {
    super()
    this.state = {
      areas: '',
      listings: '',
      userFavorites: ''
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
        .then(areaValues => this.setState({areas: areaValues}))
    })
  }

  getAreaId = (id) => {
    route = `/areas/${id}`
  }

displayAreas = () => {
  return this.state.areas.map(area => {
    return <AreaCard
      shortName={area.shortName}
      name={area.area}
      description={area.about}
      areaId={area.id}
      key={area.id}
      getAreaId={this.getAreaId}
      listings={area.listings}
      />
    })
  }

  render() {
    console.log(this.props);
    if(!this.state.areas) {
      return <h1>Loading...</h1>
    } else {
      return(
        <main>
          <NavLink to='/'>Signout</NavLink>
          <Greeting user={this.props.location.state.user} purpose={this.props.location.state.purpose} />
          <h1>Denver Areas</h1>
          {this.displayAreas()}
          <Route exact path={route} component={AreaListing} />
        </main>
      )
    }
  }
}

export default Areas;
