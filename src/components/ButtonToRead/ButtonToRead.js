import React from 'react'
import PropTypes from 'prop-types'
import './ButtonToRead.css'

function ButtonToRead({book, myBooks, addRemove}) {
  return (
    <button className='to-read-button' onClick={() => addRemove(book)}>
      <img className='add-icon' src={myBooks.some(myBook => myBook.id === book.id) ? process.env.PUBLIC_URL + "/images/check.svg" : process.env.PUBLIC_URL + "/images/add.svg" }/> want to read
    </button>)
}

ButtonToRead.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    publisher: PropTypes.string.isRequired,
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
    publisher: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    images: PropTypes.shape({
      smallThumbnail: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  addRemove: PropTypes.func.isRequired,
};

export default ButtonToRead