import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Greeting from '../Greeting/Greeting'
import AreaCard from '../AreaCard/AreaCard';
import AreaListing from '../AreaListing/AreaListing';


class Areas extends Component {
  constructor() {
    super()
    this.state = {
      areas: '',
      userFavorites: ''
    }
  }

  componentDidMount() {
    this.setState({areas: this.props.areasData})
  }
  
  displayAreas = () => {
    return this.state.areas.map(area => {
      return <AreaCard
      shortName={area.shortName}
      name={area.area}
      description={area.about}
      areaId={area.id}
      key={area.id}
      listings={this.props.listingsUpdate}
      />
    })
  }
  
  render() {
    if(!this.state.areas) {
      return <h1>Loading...</h1>
    } else {
      return(
        <main>
          <NavLink to='/'>Signout</NavLink>
          <h1>Denver Areas</h1>
          {this.displayAreas()}
        </main>
      )
    }
  }
}

export default Areas;
