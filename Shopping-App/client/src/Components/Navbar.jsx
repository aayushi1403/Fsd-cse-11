import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>

      <Link to="/">Home</Link>
      <Link to="/mycart">Mycart</Link>
      <Link to="/myorders">Myorders</Link>
      <Link to="/settings">settings</Link>
      <Link to="/profile">My profile</Link>
      <Link to="logout/">Logout</Link>

    </div>
  )
}

export default Navbar
