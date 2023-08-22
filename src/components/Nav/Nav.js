import React from 'react'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { Link, useNavigate } from 'react-router-dom'
import './Nav.css'

const Nav = ({ handleApiError, loginGoogle }) => {

  const [user, loading] = useAuthState(auth)
  
  const navigate = useNavigate()

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
    .catch((error) => {
      handleApiError(error)
    });
  }

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
          <p className='tab' onClick={logOut}>Log Out</p>
        </div>
      </div>
      :
      <button className='login'>
        <h2 onClick={loginGoogle}>
          Log In
        </h2>
      </button>
    }
  </header>)
}

export default Nav
