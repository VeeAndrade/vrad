import React from 'react';
import { Link } from 'react-router-dom';

const AreaListing = ({ listings, id }) => {
  return listings.map(listing => {
    return (
      <article key={listing.split('/').reverse()[0]}>
      <header>name</header>
      <Link to={ `areas/${id}` }>View This Listing</Link>
      </article>
    )
  })
};

export default AreaListing;
