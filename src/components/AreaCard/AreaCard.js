import React from 'react';

const AreaCard = ({shortName, name, description}) => {
  console.log('got here')
  return(
    <section>
      <h3>{name}
      <p>{shortName}</p>
      </h3>
      <img src='' />
      <aside>{description}<button>View Listing</button></aside>
    </section>
  )
}

export default AreaCard