import React from 'react'

const Listing = (props) => {
  if(!props.matched){
    return <h1>Loading...</h1>
  } else {
    let id = props.matched.listing_id.toString()
    return (
    <article>
      <h1>{props.matched.name}</h1>
      <section className='images-section'>
        <img src={process.env.PUBLIC_URL + `/images/${id}_a.jpg`} />
        <img src={process.env.PUBLIC_URL + `/images/${id}_b.jpg`} />
        <img src={process.env.PUBLIC_URL + `/images/${id}_c.jpg`} />
      </section>
      <ul><p>This place includes:</p>
        {props.matched.details.features.map(feature => {
          return (<li key={feature}>{feature}</li>)
        })}
      </ul>
      <section className='description-section'>
        <p>Address: {props.matched.address.street}</p>
        <p>Zip Code: {props.matched.address.zip}</p>
        <p>Beds: {props.matched.details.beds}</p>
        <p>Baths: {props.matched.details.baths}</p>
        <p>Cost Per Night: ${props.matched.details.cost_per_night}</p>
      </section>
      <button onClick={() => props.addToFavorites(props.matched)}>Favorite</button>
    </article>
  )
  }
}


export default Listing;
