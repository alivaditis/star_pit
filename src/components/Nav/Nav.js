import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'


const Nav = () => {
  return (
  <header className='nav-star-pit'>
    <Link to='/'>
      <h1>The Star Pit</h1>
    </Link>
    <div className='dropdown'>
      <h2 className='dropdown-button'>My Books</h2>
      <div class='dropdown-content'>
        <Link className='tab' to='/to-read'>
          <p>Want to Read</p>
        </Link>
        <Link className='tab' to='/currently-reading'>
          <p>Currently Reading</p>
        </Link>
        <Link className='tab' to='/read'>
          <p>Read</p>
        </Link>
      </div>
    </div>
  </header>)
}

export default Nav