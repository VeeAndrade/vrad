import React from 'react'

const Listing = (props) => {
  if(!props.matched){
    return <h1>Loading...</h1>
  } else {
    console.log(props.matched);
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
          return (<li>{feature}</li>)
        })}
      </ul>
      <section className='description-section'>
        <p>{props.matched.address.street}</p>
        <p>{props.matched.address.zip}</p>
        <p>{props.matched.details.beds}</p>
        <p>{props.matched.details.baths}</p>
        <p>{props.matched.details.cost_per_night}</p>
      </section>
      <button>Favorite</button>
    </article>
  )
  }
}
// Address
// Number of Bedrooms
// Number of Bathrooms
// Cost per Night
// All pictures of the listing
// Unique features of the listing

// {listing_id: 744, area_id: 590, name: "Upscale Modern Apartments", address: {…}, details: {…}, …}
// listing_id: 744
// area_id: 590
// name: "Upscale Modern Apartments"
// address: {street: "2345 Walnut St", zip: 80205}
// details:
// neighborhood_id: 5124122
// superhost: false
// seller_source: "91jss1"
// beds: 2
// baths: 2.5
// cost_per_night: 299
// features: (3) ["workout facility", "fireplace", "patio with grill"]
// __proto__: Object
// dev_id: "k6h524"
// area: "rino"
// db_connect: 233658
// __proto__: Object

// A button to “Favorite” the listing

export default Listing;
