import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getBooks } from '../../api'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import './Results.css'

function Results ({myBooks, addRemove, handleApiError}) {

  
  const {query, index} = useParams()
  const [results, setResults] = useState([])
  const [total, setTotalItems] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
    
  useEffect(() => {
    setIsLoading(true)
    getBooks(query, index)
      .then(data => {
        setResults(data.items)
        setTotalItems(data.totalItems)
        setIsLoading(false)
      })
      .catch(error => handleApiError(error))
  }, [query, index])

  if (isLoading) {
    return (<p className="loading">loading...</p>)
  } else if (results.length) {
      return (
      <div className='results-container'>
        {results.map((book, mapIndex) => <Card key={mapIndex} book={book} myBooks={myBooks} addRemove={addRemove}/>)}
      </div>)
  } else {
      return (<p className='no-results'>{`No results for ${query}`}</p>)
  }

}

Results.propTypes = {
  myBooks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    publisher: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    images: PropTypes.shape({
      smallThumbnail: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  addRemove: PropTypes.func.isRequired,
  handleApiError: PropTypes.func.isRequired,
};

export default Results