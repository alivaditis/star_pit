import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Search from '../Search/Search';
import Results from '../Results/Results'
import Book from '../Book/Book'

function App() {
  const [myBooks, setMyBooks] = useState([])
  
  const addRemoveWant = (book) => {
    const newBook = {...book, status: 'to-read'}
    if (myBooks.every(book => book.id !== newBook.id)) {
      setMyBooks([...myBooks, newBook])
    } else {
      const filtered = [...myBooks].filter(book => book.id !== newBook.id)
      setMyBooks(filtered)
    }
  }

  return (
    <>
      <Search/>
      <main>
        <Routes>
          <Route path='/'/>
          <Route path='/search/:query/:index' element={<Results myBooks={myBooks} addRemove={addRemoveWant}/>}/>
          <Route path='/books/:id' element={<Book myBooks={myBooks} addRemove={addRemoveWant}/>}/>
          <Route path='/to-read'/>
          <Route path='*'/>
        </Routes>
      </main>
    </>
  );
}

export default App;