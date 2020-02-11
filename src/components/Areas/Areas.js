import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AreaCard from '../AreaCard/AreaCard';
import './Areas.css'

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
      name={area.name}
      description={area.about}
      areaId={area.id}
      key={area.id}
      />
    })
  }

  render() {
    if(!this.state.areas) {
      return <h1>Loading...</h1>
    } else {
      return(
        <main className='main-areas'>
          <section className='card-container'>
            {this.displayAreas()}
          </section>
        </main>
      )
    }
  }
}

export default Areas;