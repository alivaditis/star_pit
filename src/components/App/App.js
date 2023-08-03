import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import Search from '../Search/Search'
import Results from '../Results/Results'
import Book from '../Book/Book'
import ToRead from '../ToRead/ToRead'
import List from '../List/List'
import Empty from '../Empty/Empty';

function App() {
  const [myBooks, setMyBooks] = useState([{
    "id": "Wo9pEAAAQBAJ",
    "title": "The Terraformers",
    "authors": [
      "Annalee Newitz"
    ],
    "publisher": "Tor Books",
    "publishedDate": "2023-01-31",
    "images": {
      "smallThumbnail": "http://books.google.com/books/content?id=Wo9pEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=Wo9pEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
    },
    "status": "to-read"
  }])
  const [apiError, setApiError] = useState(null)
  
  const addRemove = (book) => {
    const newBook = {...book, status: 'to-read'}
    if (myBooks.every(book => book.id !== newBook.id)) {
      setMyBooks([...myBooks, newBook])
    } else {
      const filtered = [...myBooks].filter(book => book.id !== newBook.id)
      setMyBooks(filtered)
    }
  }

  const handleApiError = (error) => {
    setApiError(error)
  }

  return (
    <>
      <Nav/>
      <Search/>
      {apiError ? <h2>{apiError.message}</h2> :
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