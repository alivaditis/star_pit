import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Card ({book, myBooks, addRemove}) {
  return (
    <div className='card'>
      <Link to={`/books/${book.id}`}>
        <img className='card-image' src={book.images.thumbnail}/>
      </Link>
      <div className='card-info'>
        <Link to={`/books/${book.id}`}>
        <p className='card-title'>{book.title}</p>
        </Link>
        <p className='card-authors'>{book.authors.join(', ')}</p>
        {book.publishedDate && <p className='card-date'>{book.publishedDate.slice(0, 4)}</p>}
      </div>
        <button className='card-button' onClick={() => addRemove(book)}>
          {myBooks.some(myBook => myBook.id === book.id) ? '-' : '+' } want to read
        </button>
    </div>
  )
}

export default Card