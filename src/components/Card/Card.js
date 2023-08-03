import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ButtonToRead from '../ButtonToRead/ButtonToRead'
import './Card.css'

function Card ({book, myBooks, addRemove}) {
  const onImageError = (e) => {
    e.target.src = process.env.PUBLIC_URL + '/images/space.jpeg'
  }
  
  return (
    <div className='card'>
      <Link to={`/books/${book.id}`}>
        <img className='card-image' src={book.images? book.images.thumbnail : ''} onError={onImageError}/>
      </Link>
      <div className='card-info'>
        <Link to={`/books/${book.id}`}>
        <p className='card-title'>{book.title}</p>
        </Link>
        <p className='card-authors'>{book.authors.join(', ')}</p>
        {book.publishedDate && <p className='card-date'>{book.publishedDate.slice(0, 4)}</p>}
      </div>
      <div className='card-button'>
        <ButtonToRead book={book} myBooks={myBooks} addRemove={addRemove}/>
      </div>
    </div>
  )
}

export default Card