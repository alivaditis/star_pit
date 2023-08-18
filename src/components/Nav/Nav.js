import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'


const Nav = () => {
  return (
  <header className='nav-star-pit'>
    <Link to='/'>
      <h1>The Star Pit</h1>
    </Link>
    <Link className='tab' to='/to-read'>
      <h2>My Books</h2>
    </Link>
    <Link className='tab' to='/currently-reading'>
      <h2>currently</h2>
    </Link>
    <Link className='tab' to='/read'>
      <h2>read</h2>
    </Link>
  </header>)
}

export default Nav