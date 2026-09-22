import React from 'react'

function ProductCard({props}) {
  return (
    <div className='flex flex-col w-100 h-100 border-2 black justify-center'>
      <img src={props.images[0]} alt="" className='w-50 h-50'/>
      <span>{props.title}</span>
      <span>{props.price}</span>
      <button className='border-2 black w-50 '>Add to Cart</button>
    </div>
  )
}

export default ProductCard
