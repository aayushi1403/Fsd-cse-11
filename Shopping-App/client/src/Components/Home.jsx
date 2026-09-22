import React from 'react'
import Items from './Items'
import hero from '../assets/hero.png'
import ItemStore from './ItemStore'
import { Outlet } from 'react-router-dom'
const Home = () => {
 
  return (
    <div className="home">
    <Outlet/>
    </div>
  )
}

export default Home