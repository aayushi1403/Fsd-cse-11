import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter App</Link>
      <Link to="/stopwatch">Stopwatch App</Link>
      <Link to="/store">My store</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Navbar