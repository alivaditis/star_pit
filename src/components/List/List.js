import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import PropTypes from 'prop-types'
import Card from "../Card/Card"
import { getList, getBooksInList } from "../../api"
import listImages from "./ListImages"
import './List.css'

function List ({myBooks, addRemove, handleApiError}) {
  const {id} = useParams()
  const [listInfo, setListInfo] = useState(null)
  const [listBooks, setListBooks] = useState(null)
  
  useEffect(() => {
    getList(id)
      .then(data => {
        setListInfo(data)
      })
      .catch(error => handleApiError(error))
    }, [id])

  useEffect(() => {
    getBooksInList(id)
      .then(data => {
        setListBooks(data.items)
      })
      .catch(error => handleApiError(error))
    }, [id])

  if (listInfo && listBooks) {
    return (
    <>
      <img className='list-img' src ={process.env.PUBLIC_URL + listImages[id][0]} alt={process.env.PUBLIC_URL + listImages[id][1]}/>
      <h2 className='list-heading'>{listInfo.title} {listBooks.length ? `(${listBooks.length})` : ''} </h2>
      <p className='list-description'>{listInfo.description.replaceAll('&#39;', "'").replaceAll('&quot;','"')}</p>
      <div className='results-container'>
        {listBooks.map((book, mapIndex) => <Card key={mapIndex} book={book} myBooks={myBooks} addRemove={addRemove}/>)}
      </div>
    </>)
    } else {
      return (<p className='loading'>loading...</p>)
    }

}

List.propTypes = {
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

export default List