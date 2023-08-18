import React from "react"
import Card from "../Card/Card"
import PropTypes from 'prop-types'
import './ToRead.css'

function ToRead ({myBooks, addRemove, action}) {
  const filtered = myBooks.filter(book => book.status===action)
  return (
    <>
      <h2 className='list-heading'>{action} {filtered.length ? `(${filtered.length})` : ''} </h2>
      {!filtered.length && <h2 className="no-results">Add some books to your list.</h2>}
      <div className='results-container'>
        {filtered.map((book, mapIndex) => <Card key={mapIndex} book={book} myBooks={myBooks} addRemove={addRemove}/>)}
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