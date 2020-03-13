import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import './Greeting.css';

const Greeting = ({ user, purpose, userFavorites, updateUserInfo }) => {

  const updateUser = () => {
    let user = ''
    let purpose = ''
    updateUserInfo(user, purpose)
  }

  if(!user || !purpose) {
    return ''
  } else {
    return(
      <>
      <header className='logged-in-header'>
        <h2 className='welcome-user'>Welcome, {user}</h2>
        <h1 className='logged-in-heading'>Denver Rentals</h1>
        <section className='links-buttons'>
          <NavLink className='favorites-nav-link' to='/favorites'>Favorites:{userFavorites.length}</NavLink>
          <NavLink className='signout-btn' to='/' onClick={updateUser}>Signout</NavLink>
        </section>
      </header>
      <article className='user-info'>
        <p className='purpose'>We found the perfect {purpose} rentals for you!</p>
      </article>
      </>
    )}
  }

  Greeting.propTypes = {
    user: PropTypes.string,
    purpose: PropTypes.string,
    userFavorites: PropTypes.array
  }

export default Greeting;
