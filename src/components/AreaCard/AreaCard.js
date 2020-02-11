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
      <img src='https://res.cloudinary.com/simpleview/image/upload/v1476736550/clients/denver/denver_art_museum_night_f3f50e4f-e62b-4fd7-b81c-e08fd97ad0a2.jpg' className='area-card-image' alt={`Pictures of a rental in ${shortName}`}/>
      <aside className='area-card-description'>{description}<Link className='view-listings-button' listings={listings}
      to={`/areas/${areaId}/listings`}>View Listings</Link>
      </aside>
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
