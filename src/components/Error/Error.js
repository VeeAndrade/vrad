import React from 'react'
import PropTypes from 'prop-types'

const Error = (errorMessage) => {
  return (
    <section>
      <h1>There was an error: {errorMessage}</h1>
    </section>
  )
}

export default Error

Error.propTypes = {
  errorMessage: PropTypes.string
}
