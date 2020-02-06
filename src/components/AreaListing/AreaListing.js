import React from 'react';
import { Link } from 'react-router-dom';

const AreaListing = (id) => {
  return(
    <article>
      <header>name</header>
      <Link to={`areas/${id}` }>View This Listing</Link>
    </article>
  );
};

export default AreaListing;
