import React from 'react';
import { Link } from 'react-router-dom';


const AreaListing = ({ listings, id }) => {
  return listings.map(listing => {
    return (
      <article key={listing.listing_id}>
        <header>{listing.name}</header>
        <img/>
        <Link to={ `/areas/${id}/listings/${listing.listing_id}` }>View This Listing</Link>
      </article>
    )
  })
};

export default AreaListing;
