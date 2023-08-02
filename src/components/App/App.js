import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Search from '../Search/Search';
import Results from '../Results/Results'
import Book from '../Book/Book'

function App() {
  return (
    <>
      <Search/>
      <main>
        <Routes>
          <Route path='/'/>
          <Route path='/search/:query/:index' element={<Results/>}/>
          <Route path='/books/:id' element={<Book/>}/>
          <Route path='/to-read'/>
          <Route path='*'/>
        </Routes>
      </main>
    </>
  );
}

export default App;