import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './AreaCard.css'

const AreaCard = ({shortName, name, description, areaId, listings}) => {
  return(
    <section className='area-card-section'>
      <h3 className='area-card-name'>{name}
        <p className='area-card-shortName'>({shortName})</p>
      </h3>
      <img src={process.env.PUBLIC_URL + `/images/den-pic-${areaId}.jpg`} className='area-card-image' alt={`Pictures of a rental in ${shortName}`}/>
      <section className='describe-sect'>
        <aside className='area-card-description'>{description}</aside>
        <Link className='view-listings-button' listings={listings} to={`/areas/${areaId}/listings`}>View Listings</Link>
      </section>
    </section>
  )
}

AreaCard.propTypes = {
  shortName: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  areaId: PropTypes.number,
  listings: PropTypes.array,
}

export default AreaCard;
