import React from 'react';

const FavoriteListing = (props) => {

  const findIndexOfFavorite = (favoriteId) => {
    let fav = props.userFavorites.find((favorite) => {
      return favorite.listing_id === parseInt(favoriteId)
    })
    let index = props.userFavorites.indexOf(fav)
    props.userFavorites.splice(index, 1)
    props.removeFromFavorites(props.userFavorites)
  }

  if(!props.userFavorites.length){
    return <h1>You have no userFavorites</h1>
  } else {
    console.log(props);
    return props.userFavorites.map(favorite => {
      return (
        <article>
        <h1>{'hey'}</h1>
        <section className='images-section'>
          <img src={process.env.PUBLIC_URL + `/images/${favorite.listing_id}_a.jpg`} />
          <img src={process.env.PUBLIC_URL + `/images/${favorite.listing_id}_b.jpg`} />
          <img src={process.env.PUBLIC_URL + `/images/${favorite.listing_id}_c.jpg`} />
        </section>
        <button name={favorite.listing_id} onClick={(event) => findIndexOfFavorite(event.target.name)}>Remove From Favorites</button>
        </article>
      )
    })
  }
}

export default FavoriteListing;



// <ul><p>This place includes:</p>
// // {props.matched.details.features.map(feature => {
//   //   return (<li key={feature}>{feature}</li>)
//   // })}
//   </ul>
//   <section className='description-section'>
//   <p>Address: {props.matched.address.street}</p>
//   <p>Zip Code: {props.matched.address.zip}</p>
//   <p>Beds: {props.matched.details.beds}</p>
//   <p>Baths: {props.matched.details.baths}</p>
//   <p>Cost Per Night: ${props.matched.details.cost_per_night}</p>
//   </section>
