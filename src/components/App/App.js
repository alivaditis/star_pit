import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { get, ref, set } from 'firebase/database'
import { auth, db } from '../../firebase'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import Search from '../Search/Search'
import Results from '../Results/Results'
import Book from '../Book/Book'
import ToRead from '../ToRead/ToRead'
import List from '../List/List'
import Empty from '../Empty/Empty'

function App() {
  const [user] = useAuthState(auth)
  const [myBooks, setMyBooks] = useState([])
  const [apiError, setApiError] = useState(null)
  
  useEffect(() => {
    if(user) {
      const userBooksRef = ref(db, `users/${user.uid}/books`)
      get(userBooksRef)
        .then(snapshot => {
          if (!snapshot.exists()) {
            set(userBooksRef, [])
              .then(() => {
                setMyBooks([])
              })
            } else {
              setMyBooks(snapshot.val())
            }
          })
        .catch((error) => {
          handleApiError(error);
        })
    } else {
      setMyBooks([])
    }
  }, [user])
  
  const googleProvider = new GoogleAuthProvider()
  
  const loginGoogle = () => {
    signInWithPopup(auth, googleProvider)
  }
  
  const addRemove = (book, action) => {
    
    if (!user) {
      loginGoogle()
      return
    }
    
    const newBook = {...book, status: action}
    const userBooksRef = ref(db, `users/${user.uid}/books`)
  
    get(userBooksRef)   
      .then(snapshot => {
        const existingBooks = snapshot.val();       
        if (myBooks.every(book => book.id !== newBook.id && !existingBooks)) {
          set(userBooksRef, [newBook])
            .then(() => {
              setMyBooks([newBook, ...myBooks])
              toast(`"${newBook.title}" was added to your "${action}" shelf.`)
            })
            .catch((error) => {
              handleApiError(error);
            })
        } else if (myBooks.every(book => book.id !== newBook.id)) {
          set(userBooksRef, [newBook, ...existingBooks])
            .then(() => {
              setMyBooks([newBook, ...myBooks])
              toast(`"${newBook.title}" was added to your "${action}" shelf.`)
            })
            .catch((error) => {
              handleApiError(error);
            })
        } else if (myBooks.some(book => book.id === newBook.id && book.status !== action)) {
          const updatedList = [...myBooks]
          const index = updatedList.findIndex(book => book.id === newBook.id)
          const foundBook = updatedList[index]
          foundBook.status = action
          updatedList.splice(index, 1)
          updatedList.unshift(foundBook)
          set(userBooksRef, updatedList)
            .then(() => {
              setMyBooks(updatedList)
              toast(`"${newBook.title}" was moved to your "${action}" shelf.`)
            })
            .catch((error) => {
              handleApiError(error);
            })
        } else {
          const filtered = [...myBooks].filter(book => book.id !== newBook.id)
          set(userBooksRef, filtered)
            .then(() => {
              setMyBooks(filtered)
              toast(`"${newBook.title}" was removed from your "${action}" shelf.`)
            })
            .catch((error) => {
              handleApiError(error);
            })
        }
      })
    }

  const handleApiError = (error) => {
    setApiError(error.message)
  }

  return (
    <>
      <Nav handleApiError={handleApiError} loginGoogle={loginGoogle}/>
      <Search/>
      {apiError ? <div className='no-results'>{apiError.split('/n').map((string, index) => <p key={index}>{string}</p>)}</div>  :
        <main>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/search/:query/:index' element={<Results myBooks={myBooks} addRemove={addRemove} handleApiError={handleApiError}/>}/>
            <Route path='/books/:id' element={<Book myBooks={myBooks} addRemove={addRemove} handleApiError={handleApiError}/>}/>
            <Route path='/lists/:id' element={<List myBooks={myBooks} addRemove={addRemove} handleApiError={handleApiError}/>}/>
            <Route path='/to-read' element={<ToRead myBooks={myBooks} action={'Want to Read'} addRemove={addRemove}/>}/>
            <Route path='/currently-reading' element={<ToRead myBooks={myBooks} action={'Currently Reading'} addRemove={addRemove}/>}/>
            <Route path='/read' element={<ToRead myBooks={myBooks} action={'Read'} addRemove={addRemove}/>}/>
            <Route path='*' element={<Empty/>}/>
          </Routes>
          <ToastContainer 
            position="bottom-center"
            autoClose={3000}
            theme='light'
          />
        </main>
      }
    </>
  );
}

export default App;
  