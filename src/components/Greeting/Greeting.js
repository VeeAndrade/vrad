import React from 'react';
import { Link } from 'react-router-dom';
import './Greeting.css';

const Greeting = ({ user, purpose, userFavorites }) => {
  if(!user || !purpose) {
    return ''
  } else {
    return(
      <article className='user-info'>
        <Link to='/favorites'>{userFavorites.length}</Link>
        <p>
          Hello, {user}. You've chosen {purpose} as your
          reason for being here!
        </p>
      </article>
    )}

  }

export default Greeting;
