import { cleanupBooks, removeDuplicates } from "./helpers"

function handleError(res) {
  if(!res.ok) {
    throw new Error(`HTTP Error: ${res.status} -- Please try again later`)
  }
  return res.json()
}

const getBooks = (query, index) => {
  
  const spacedQuery = query.split(' ').join('+')

  return fetch(`https://www.googleapis.com/books/v1/volumes?q="${spacedQuery}"+subject:"fiction_science_fiction"&startIndex=${index === '0' ? 0 : parseInt(index)+10}&printType=books`)
    .then(res => handleError(res))
      .then(data => ({
        kind: data.kind,
        totalItems: data.totalItems,
        items: data.items ? removeDuplicates(cleanupBooks(data.items)) : []
      }))
}

const getBookDetails = (id) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then(res => handleError(res))
}

export { getBooks, getBookDetails }