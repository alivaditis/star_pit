import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getBooks } from '../../api'
import Card from '../Card/Card'
import './Results.css'

function Results () {

  
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
  }, [query, index])

  if (isLoading) {
    return (<p>loading...</p>)
  } else if (results.length) {
      return (
      <div className='results-container'>
        {results.map((book, mapIndex) => <Card key={book.id} {...book} />)}
      </div>)
  } else {
      return (<p>{`No results for ${query}`}</p>)
  }

}

export default Results