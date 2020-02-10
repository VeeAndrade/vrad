import React from 'react';
import AreaListings from '../AreaListing/AreaListing'
import '../ListingsContainer/ListingsContainer.css'

const ListingsContainer = ({listings, id}) => {
  return (
    <section className='area-listings-container'>
      <AreaListings listings={listings} id={id}/>
    </section>
  )
}

export default ListingsContainer;