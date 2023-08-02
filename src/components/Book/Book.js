import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getBookDetails } from '../../api'
import { removeTags } from '../../helpers'
import './Book.css'

function Book () {
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
      <p>loading...</p> 
      : <div className='book'>
          <img className='book-image' src={book.volumeInfo.imageLinks.thumbnail}></img>
          <p>{book.volumeInfo.title}</p>
          <p>{book.volumeInfo.authors.join(', ')}</p>
          <p>{removeTags(book.volumeInfo.description)}</p>
        </div>}
  </>
  )
}

export default Book