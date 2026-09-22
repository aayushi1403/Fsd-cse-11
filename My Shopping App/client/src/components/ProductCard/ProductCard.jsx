import React from 'react'

function ProductCard({props}) {
  return (
    <div className="flex flex-col items-center justify-center w-70 h-80 border-2 border-black rounded-lg p-4 border-r-4">
      <img src={props.images[0]} alt="" className='w-50 h-50'/>
      <span>{props.title}</span>
      <span>{props.price}</span>
      <button className='border-2 black w-50 bg-blue-300 '>Add to Cart</button>
    </div>
  )
}

export default ProductCard
