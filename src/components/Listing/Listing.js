import React from 'react'

const Listing = (props) => {
  if(!props.matched){
    return <h1>Loading...</h1>
  } else {
    console.log(props)
    return (
    <article>
      <h1>{props.matched.name}</h1>
      <img src='' alt='A picture of the listing' />
      <button>Favorite</button>
    </article>
  )
  }
}

export default Listing;
