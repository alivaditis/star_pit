import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import { getList, getBooksInList } from "../../api";
import listImages from "./ListImages";
import './List.css'

function ToRead ({myBooks, addRemove, handleApiError}) {
  const {id} = useParams()
  const [listInfo, setListInfo] = useState(null)
  const [listBooks, setListBooks] = useState(null)
  // const [isLoading, setIsLoading] = useState(true)

  
  useEffect(() => {
    // setIsLoading(true)
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
      <img className='list-img' src ={process.env.PUBLIC_URL + listImages[id]}/>
      <h2 className='list-heading'>{listInfo.title} {listBooks.length ? `(${listBooks.length})` : ''} </h2>
      <p className='list-description'>{listInfo.description.replace('&#39;', "'")}</p>
      <div className='results-container'>
        {listBooks.map((book, mapIndex) => <Card key={mapIndex} book={book} myBooks={myBooks} addRemove={addRemove}/>)}
      </div>
    </>)
    } else {
      return (<p className='loading'>loading...</p>)
    }

}

export default ToRead