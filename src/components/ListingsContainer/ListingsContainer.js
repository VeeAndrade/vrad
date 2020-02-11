import React from 'react';
import AreaListings from '../AreaListing/AreaListing'
import PropTypes from 'prop-types'
import '../ListingsContainer/ListingsContainer.css'

const ListingsContainer = ({listings, id}) => {
  return (
    <section className='area-listings-container'>
      <AreaListings listings={listings} id={id}/>
    </section>
  )
}

ListingsContainer.propTypes = {
  listings: PropTypes.string,
  id: PropTypes.string
}

export default ListingsContainer;
