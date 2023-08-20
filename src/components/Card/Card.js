import React from 'react'
import { Link } from 'react-router-dom'
import ButtonToRead from '../ButtonToRead/ButtonToRead'
import PropTypes from 'prop-types'
import './Card.css'

function Card ({book, myBooks, addRemove}) {
  const onImageError = (e) => {
    e.target.src = process.env.PUBLIC_URL + '/images/space.jpeg'
  }
  
  return (
    <div className='card'>
      <Link to={`/books/${book.id}`}>
        <img className='card-image' src={book.images? book.images.thumbnail : ''} alt={`${book.title} by ${book.authors.join(', ')}`}onError={onImageError}/>
      </Link>
      <div className='card-info'>
        <Link to={`/books/${book.id}`}>
        <p className='card-title'>{book.title}</p>
        </Link>
        <p className='card-authors'>{book.authors.join(', ')}</p>
        {book.publishedDate && <p className='card-date'>{book.publishedDate.slice(0, 4)}</p>}
      </div>
      <div className='card-button'>
        <ButtonToRead book={book} myBooks={myBooks} action='Want to Read' addRemove={addRemove}/>
        <ButtonToRead book={book} myBooks={myBooks} action='Currently Reading' addRemove={addRemove}/>
        <ButtonToRead book={book} myBooks={myBooks} action='Read' addRemove={addRemove}/>
      </div>
    </div>
  )
}

Card.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    publishedDate: PropTypes.string.isRequired,
    images: PropTypes.shape({
      smallThumbnail: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  myBooks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    publishedDate: PropTypes.string.isRequired,
    images: PropTypes.shape({
      smallThumbnail: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  addRemove: PropTypes.func.isRequired,
};

export default Card