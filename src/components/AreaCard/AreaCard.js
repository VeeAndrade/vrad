import React from 'react';
import { Link } from 'react-router-dom'

const AreaCard = ({shortName, name, description, areaId, getAreaId, listings}) => {
  return(
    <section>
      <h3>{name}
      <p>{shortName}</p>
      </h3>
      <img src='' />
      <aside>{description}<Link id={areaId}
      onClick={(event) => getAreaId(event.target.id)}
      to={{
        pathname: `/areas/${areaId}`,
        areaData: {shortName: shortName, name: name, listings: listings}
      }}>View Listing</Link></aside>
    </section>
  )


}

export default AreaCard
