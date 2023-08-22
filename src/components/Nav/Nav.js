import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import {Link} from 'react-router-dom'
import Login from '../Login/Login'
import './Nav.css'

const Nav = () => {

  const [user, loading] = useAuthState(auth)

  return (
  <header className='nav-star-pit'>
    <Link to='/'>
      <h1>The Star Pit</h1>
    </Link>
    {user ?
      <div className='dropdown'>
        <h2 className='dropdown-button'>My Books</h2>
        <div className='dropdown-content'>
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
      :
      <Login/>
    }
  </header>)
}

export default Nav