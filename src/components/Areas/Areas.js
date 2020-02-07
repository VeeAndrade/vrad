import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AreaCard from '../AreaCard/AreaCard';


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
    this.setState({areas: this.props.areasData})
  }

  displayAreas = () => {
    return this.state.areas.map(area => {
      return <AreaCard
      shortName={area.shortName}
      name={area.area}
      description={area.about}
      areaId={area.id}
      listings={area.listings}
      key={area.id}
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
