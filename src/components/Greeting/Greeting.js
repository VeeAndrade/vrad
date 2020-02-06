import React from 'react';
import Form from '../Form/Form'

const Greeting = ({ user, purpose }) => {
  if(!user || !purpose) {
    return ''
  } else {
    return(
      <article className='user-info'>
      <p>
      Hello, {user}. You've chosen {purpose} as your
      reason for being here!
      </p>
      </article>
    )}

  }

export default Greeting;
