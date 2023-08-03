import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import { getList, getBooksInList } from "../../api";
import { removeTags } from "../../helpers";
import './List.css'

function ToRead ({myBooks, addRemove}) {
  const {id} = useParams()
  const [listInfo, setListInfo] = useState(null)
  const [listBooks, setListBooks] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  
  useEffect(() => {
    setIsLoading(true)
    getList(id)
      .then(data => {
        setListInfo(data)
        getBooksInList(id)
          .then(data => {
            setListBooks(data.items)
            setIsLoading(false)
          })
      })
  }, [id])

  if (!isLoading) {
    return (
    <>
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