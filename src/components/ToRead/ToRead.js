import React from "react"
import Card from "../Card/Card"
import PropTypes from 'prop-types'
import './ToRead.css'

function ToRead ({myBooks, addRemove}) {
  return (
    <>
      <h2 className='list-heading'>To Read {myBooks.filter(book => book.status==='to-read').length ? `(${myBooks.filter(book => book.status==='to-read').length})` : ''} </h2>
      {!myBooks.length && <h2 className="no-results">Add some books to your to-read list.</h2>}
      <div className='results-container'>
        {myBooks.map((book, mapIndex) => <Card key={mapIndex} book={book} myBooks={myBooks} addRemove={addRemove}/>)}
      </div>
    </>)
}

ToRead.propTypes = {
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
}

export default ToRead