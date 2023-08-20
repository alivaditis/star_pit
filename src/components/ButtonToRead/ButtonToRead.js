import React from 'react'
import PropTypes from 'prop-types'
import './ButtonToRead.css'

function ButtonToRead({book, myBooks, addRemove, action}) {
  return (
    <button className='to-read-button' onClick={() => addRemove(book, action)}
    style={{
      backgroundColor: myBooks.some(myBook => myBook.id === book.id && myBook.status === action) && '#4CAF50'
    }}>
    <img className='add-icon' src={myBooks.some(myBook => myBook.id === book.id && myBook.status === action)  ? process.env.PUBLIC_URL + "/images/check.svg" : process.env.PUBLIC_URL + "/images/add.svg" }/> <p className='action'>{action}</p>
    </button>)
}

ButtonToRead.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
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

export default ButtonToRead