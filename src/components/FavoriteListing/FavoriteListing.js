import React from 'react';
import PropTypes from 'prop-types'

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

FavoriteListing.propTypes = {
  userFavorites: PropTypes.array,
  removeFromFavorites: PropTypes.func
}

export default FavoriteListing;
