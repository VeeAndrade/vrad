import React from 'react';
import './Listing.css'

const Listing = (props) => {
  const findIndexOfFavorite = (favoriteId) => {
    if (!props.userFavorites.length) {
      window.alert('You have no favorites')
    } else {
      let fav = props.userFavorites.find((favorite) => {
        return favorite.listing_id === parseInt(favoriteId)
      })
      if (!props.userFavorites.includes(fav)) {
        window.alert('You do not have that listing in your favorites')
      } else {
        let index = props.userFavorites.indexOf(fav)
        props.userFavorites.splice(index, 1)
        props.removeFromFavorites(props.userFavorites)
      }
    }
  }

  if(!props.matched){
    return <h1>Loading...</h1>
  } else

  {
    let id = props.matched.listing_id.toString()
    return (
    <article className='single-listing-section'>
      <h1 className='single-listing-heading'>{props.matched.name}</h1>
      <section className='images-section'>
        <img className='listing-image' src={process.env.PUBLIC_URL + `/images/${id}_a.jpg`} />
        <img className='listing-image' src={process.env.PUBLIC_URL + `/images/${id}_b.jpg`} />
        <img className='listing-image' src={process.env.PUBLIC_URL + `/images/${id}_c.jpg`} />
      </section>
      <section className='description-details'>
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
      <section className='buttons-container'>
        <button className='favorite-button' onClick={() => props.addToFavorites(props.matched)}>Favorite</button>
        <button className='remove-from-favorites' name={parseInt(id)} onClick={(event) => findIndexOfFavorite(event.target.name)}>Remove From Favorites</button>
      </section>
      </section>
    </article>
  )
  }
}


export default Listing;
