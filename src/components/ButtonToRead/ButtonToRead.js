import React from 'react'

function ButtonToRead({book, myBooks, addRemove}) {
  return (
    <button className='card-button' onClick={() => addRemove(book)}>
      {myBooks.some(myBook => myBook.id === book.id) ? '-' : '+' } want to read
    </button>)
}

export default ButtonToRead