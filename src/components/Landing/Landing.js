import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  const navigate = useNavigate()
  
  const handleSpotlightClick = () => {
    navigate('/lists/1001')
  }
  
  return (
    <div className='landing-container'>
        <div className='spotlight' onClick={handleSpotlightClick}>
          <p className='spotlight-text'>Author Spotlight: Samuel Delany</p>
        </div>
    </div>
  )
}

export default Landing