import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getBookDetails } from '../../api'
import { removeTags, cleanupSingleBook, formatDate } from '../../helpers'
import ButtonToRead from '../ButtonToRead/ButtonToRead'
import './Book.css'

function Book ({myBooks, addRemove}) {
  const [book, setBook] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  const { id } = useParams()
  
  useEffect(() => {
    setIsLoading(true)
    getBookDetails(id)
      .then(data => {
        setBook(data)
        setIsLoading(false)
      })
  }, [id])

  return (
  <>
    {isLoading ? 
      <p className='loading'>loading...</p> 
      : <div className='book'>
          <div className='book-container'>
            <img className='book-image' src={book.volumeInfo.imageLinks.thumbnail}></img>
            <div className='book-info'>
              <p className='book-title'>{book.volumeInfo.title}</p>
              <p className='book-authors'>{book.volumeInfo.authors.join(', ')}</p>
              <p>{book.volumeInfo.publisher}</p>
              <p>{book.volumeInfo.publishedDate ? formatDate(book.volumeInfo.publishedDate) : ''}</p>
              <div className='book-button'>
                  <ButtonToRead className='book-button' myBooks={myBooks} addRemove={addRemove} book={cleanupSingleBook(book)}/>
              </div>
            </div>
          </div>
          <p className='book-description'>{removeTags(book.volumeInfo.description)}</p>
        </div>}
  </>
  )
}

export default Book