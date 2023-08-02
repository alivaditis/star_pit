import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Card ({id, title, authors, publisher, publishedDate, images, status}) {
  return (
    <div className='card'>
      <Link to={`/books/${id}`}>
        <img className='card-image' src={images.thumbnail}/>
      </Link>
      <div className='card-info'>
        <Link to={`/books/${id}`}>
        <p className='card-title'>{title}</p>
        </Link>
        <p className='card-authors'>{authors.join(', ')}</p>
        {publishedDate && <p className='card-date'>{publishedDate.slice(0, 4)}</p>}
      </div>
        <button className='card-button'>want to read</button>
    </div>
  )
}

export default Card