import React from 'react';
import './FavoriteListing.css';
import AreaListing from '../AreaListing/AreaListing';
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
    let favoriteCards = props.userFavorites.map(favorite => {
      return (
        <article className='fav-card'>
        <h2 className='fav-heading'>{favorite.name}</h2>
        <section className='fav-images-section'>
          <img alt='area listing' className='fav-image' src={process.env.PUBLIC_URL + `/images/${favorite.listing_id}_a.jpg`} />
        </section>
        <button name={favorite.listing_id} className='remove-fav-btn' onClick={(event) => findIndexOfFavorite(event.target.name)}>Remove From Favorites</button>
        </article>
      )
    })
    return (
      <section className='fav-section'>
        {favoriteCards}
      </section>
    )
  }
}

FavoriteListing.propTypes = {
  userFavorites: PropTypes.array,
  removeFromFavorites: PropTypes.func
}

export default FavoriteListing;
