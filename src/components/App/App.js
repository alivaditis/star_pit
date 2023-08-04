import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import mockUser from '../../mockUser'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import Search from '../Search/Search'
import Results from '../Results/Results'
import Book from '../Book/Book'
import ToRead from '../ToRead/ToRead'
import List from '../List/List'
import Empty from '../Empty/Empty'

function App() {
  const [myBooks, setMyBooks] = useState(mockUser.books)
  const [apiError, setApiError] = useState(null)
  
  const addRemove = (book) => {
    const newBook = {...book, status: 'to-read'}
    if (myBooks.every(book => book.id !== newBook.id)) {
      setMyBooks([newBook, ...myBooks])
    } else {
      const filtered = [...myBooks].filter(book => book.id !== newBook.id)
      setMyBooks(filtered)
    }
  }

  const handleApiError = (error) => {
    setApiError(error.message)
  }

  return (
    <>
      <Nav/>
      <Search/>
      {apiError ? <div className='no-results'>{apiError.split('/n').map((string, index) => <p key={index}>{string}</p>)}</div>  :
        <main>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/search/:query/:index' element={<Results myBooks={myBooks} addRemove={addRemove} handleApiError={handleApiError}/>}/>
            <Route path='/books/:id' element={<Book myBooks={myBooks} addRemove={addRemove} handleApiError={handleApiError}/>}/>
            <Route path='/lists/:id' element={<List myBooks={myBooks} addRemove={addRemove} handleApiError={handleApiError}/>}/>
            <Route path='/to-read' element={<ToRead myBooks={myBooks} addRemove={addRemove}/>}/>
            <Route path='*' element={<Empty/>}/>
          </Routes>
        </main>
      }
    </>
  );
}

export default App;