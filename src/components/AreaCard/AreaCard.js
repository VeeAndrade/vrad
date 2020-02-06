import React from 'react';
import { Link } from 'react-router-dom'

const AreaCard = ({shortName, name, description, areaId, listings}) => {
  return(
    <section>
      <h3>{name}
      <p>{shortName}</p>
      </h3>
      <img src='' />
      <aside>{description}<Link listings={listings}
      to={`/areas/${areaId}`}>View Listings</Link>
      </aside>
    </section>
  )


}

export default AreaCard
