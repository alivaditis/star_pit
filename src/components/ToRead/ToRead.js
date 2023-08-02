import React from "react";
import Card from "../Card/Card";
import './ToRead.css'

function ToRead ({myBooks, addRemove}) {
  return (
    <>
      <h2 className='to-read-heading'>To Read {myBooks.filter(book => book.status==='to-read').length ? `(${myBooks.filter(book => book.status==='to-read').length})` : ''} </h2>
      <div className='results-container'>
        {myBooks.map((book, mapIndex) => <Card key={mapIndex} book={book} myBooks={myBooks} addRemove={addRemove}/>)}
      </div>
    </>)
}

export default ToRead