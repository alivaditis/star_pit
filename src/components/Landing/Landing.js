import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  const navigate = useNavigate()
  
  const handleSpotlightClick = (id) => {
    navigate(`/lists/${id}`)
  }
  
  return (
    <div className='landing-container'>
        <div className='spotlight' onClick={() => handleSpotlightClick('1001')}>
          <p className='spotlight-text'>Celebrating the Works of Samuel R Delany</p>
        </div>
        <div className='lower-container'>
          <div className='spotlight spotlight2' onClick={() => handleSpotlightClick('1002')}>
            <p className='spotlight-text'>Iain M Banks: The Culture Series</p>
          </div>
          <div className='spotlight spotlight3' onClick={() => handleSpotlightClick('1003')}>
            <p className='spotlight-text'>Octavia Butler: The Patternist Series</p>
          </div>
        </div>
    </div>
  )
}

export default Landing