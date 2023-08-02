import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import Results from '../Results/Results'
import Book from '../Book/Book'
import ToRead from '../ToRead/ToRead'

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
  
  const addRemove = (book) => {
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
      <Nav/>
      <Search/>
      <main>
        <Routes>
          <Route path='/'/>
          <Route path='/search/:query/:index' element={<Results myBooks={myBooks} addRemove={addRemove}/>}/>
          <Route path='/books/:id' element={<Book myBooks={myBooks} addRemove={addRemove}/>}/>
          <Route path='/to-read' element={<ToRead myBooks={myBooks} addRemove={addRemove}/>}/>
          <Route path='*'/>
        </Routes>
      </main>
    </>
  );
}

export default App;