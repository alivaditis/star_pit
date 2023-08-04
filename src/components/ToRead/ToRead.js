import React from "react";
import Card from "../Card/Card";
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

export default ToRead