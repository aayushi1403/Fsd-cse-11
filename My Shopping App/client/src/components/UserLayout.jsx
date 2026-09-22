import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function UserLayout() {
  return (
    <div >
      <h1 className=' flex justify-center text-[20px] bg-amber-300'>My Shopping App</h1>
      <nav className='flex justify-evenly text-amber-200 bg-black'>
        <Link to="/">Home</Link>
        <Link to="/mycart">My Cart</Link>
        <Link to="/myorders">My Orders</Link>
        <Link to="/profile">My Profile</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default UserLayout
