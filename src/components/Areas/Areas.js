import React from 'react';
import { NavLink } from 'react-router-dom';
import Greeting from '../Greeting/Greeting'

class Area extends React.Component {
  constructor() {
    super()
  }
  render() {
    return(
      <div>
        <NavLink to='/'> {this.props.location.state.user} </NavLink>
        <Greeting user={this.props.location.state.user} purpose={this.props.location.state.purpose} />
        <h1>Denver Areas</h1>
        
      </div>
    )
  }
}

export default Area;