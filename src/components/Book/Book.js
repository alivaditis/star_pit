import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getBookDetails } from '../../api'
import { removeTags, cleanupSingleBook, formatDate } from '../../helpers'
import ButtonToRead from '../ButtonToRead/ButtonToRead'
import './Book.css'

function Book ({myBooks, addRemove, handleApiError}) {
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
      .catch(error => handleApiError(error))
  }, [id])

  const onImageError = (e) => {
    e.target.src = process.env.PUBLIC_URL + '/images/space.jpeg'
  }

  return (
  <>
    {isLoading ? 
      <p className='loading'>loading...</p> 
      : <div className='book-view'>
        <div className='book'>
          <div className='book-container'>
            <img className='book-image' src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''} onError={onImageError}></img>
            <div className='book-info'>
              <p className='book-title'>{book.volumeInfo.title}</p>
              <p className='book-authors'>{book.volumeInfo.authors.join(', ')}</p>
              <p className='secondary-detail'>{book.volumeInfo.publisher}</p>
              <p className='secondary-detail'>{book.volumeInfo.publishedDate ? formatDate(book.volumeInfo.publishedDate) : ''}</p>
              <p className='secondary-detail'>{book.volumeInfo.pageCount} pages</p>
              <div className='book-button'>
                  <ButtonToRead className='book-button' myBooks={myBooks} addRemove={addRemove} book={cleanupSingleBook(book)}/>
              </div>
            </div>
          </div>
        </div>
        <div className='book-description'>{removeTags(book.volumeInfo.description)}</div>
        </div>}
  </>
  )
}

export default Book