import React, { useState } from "react";
import './Search.css'
import { useNavigate } from "react-router-dom";

function Search() {
  const [inputValue, setInput] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate(`/search/${inputValue}/0`)
  }

  return (
    <form className="search--form" name="search" spellCheck={false}>
      <div className='search--container'>
        <input
          className='search--input'
          name="search"
          type='text'
          placeholder="Search sci-fi books"
          value= {inputValue}
          onChange= {event => setInput(event.target.value)}
        />
        <button className='search--button'type='submit' onClick={event => handleSubmit(event)}></button>
      </ div>
    </form>
  );
}

export default Search;