import React from 'react'
import './ButtonToRead.css'

function ButtonToRead({book, myBooks, addRemove}) {
  return (
    <button className='to-read-button' onClick={() => addRemove(book)}>
      {myBooks.some(myBook => myBook.id === book.id) ? '-' : '+' } want to read
    </button>)
}

export default ButtonToRead