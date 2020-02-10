import React from 'react';
import { Link } from 'react-router-dom';
import './AreaListing.css'

const AreaListing = ({ listings, id }) => {
  return listings.map(listing => {
    return (
      <article className='area-listing-section' key={listing.listing_id}>
        <header className='area-listing-name'>{listing.name}</header>
        <img className='area-listing-image' src={process.env.PUBLIC_URL + `/images/${listing.listing_id}_a.jpg`} />
        <button className='view-listings-link-button'>
          <Link className='view-listing-link' to={ `/areas/${id}/listings/${listing.listing_id}` }>View This Listing</Link>
          </button>
      </article>
    )
  })
};

export default AreaListing;