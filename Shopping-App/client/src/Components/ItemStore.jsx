import React from 'react'
import Items from './Items'
import hero from '../assets/hero.png'
const ItemStore = () => {
   const itemData=[
    {image:hero,title:"React JS",price:645},
    {
      image:hero,title:"Node JS",price:450
    }
    ,
    {image:hero,title:"Express JS",price:600},
    {image:hero,title:"React JS",price:645},
    {
      image:hero,title:"Node JS",price:450
    }
    ,
    {image:hero,title:"Express JS",price:600}
  ]
  return (
    <div className="itemstore">
      <h1>Home</h1>
      {
      itemData.map((item,index)=>{
        return <Items key={index} props={item}/>
      })
    }
    </div>
  )
}

export default ItemStore

