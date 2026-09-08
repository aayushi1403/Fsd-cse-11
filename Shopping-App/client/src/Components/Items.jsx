import React from 'react'

const Items = ({props}) => {
  return (
    <div className='items'>
      <img src={props.image} width={100} height={100} alt="item image" />
      <h2>Title:{props.title}</h2>
      <h3>price:{props.price}</h3>
      <button>Add to Cart</button>
    </div>
  )
}

export default Items