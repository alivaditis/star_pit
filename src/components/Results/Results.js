import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getBooks } from '../../api'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import './Results.css'

function Results ({myBooks, addRemove, handleApiError}) {
  const {query, index} = useParams()
  const [results, setResults] = useState([])
  const [total, setTotalItems] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  
  const page = parseInt(index) + 1

  
  useEffect(() => {
    setIsLoading(true)
    getBooks(query, index)
    .then(data => {
      console.log(data)
      setResults(data.items)
      setTotalItems(data.totalItems)
      setIsLoading(false)
    })
    .catch(error => handleApiError(error))
  }, [query, index])
  
  const navigate = useNavigate()
  
  const navPrevious = () => {
    navigate(`/search/${query}/${page - 2}`)
    window.scrollTo(0, 0);
  }

  const navNext = () => {
    navigate(`/search/${query}/${page}`)
    window.scrollTo(0, 0);
  }

  if (isLoading) {
    return (<p className="loading">loading...</p>)
  } else if (results.length) {
      return (
      <div className='results-container'>
        <p className='results-for'>Results for "{query}"</p>
        {results.map((book, mapIndex) => <Card key={mapIndex} book={book} myBooks={myBooks} addRemove={addRemove}/>)}
        <div className='pagination'>
          {page > 1 && <button className='page-button' onClick={navPrevious}>{'< previous'}</button>}
          <p className='page'>{page}</p>
          {total === 10 && <button className='page-button' onClick={navNext}>{'next >'}</button>}
        </div>
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