import { cleanupBooks, removeDuplicates } from "./helpers"

function handleError(res) {
  if(!res.ok) {
    throw new Error(`HTTP Error: ${res.status} /n We could not load the content you are looking for.`)
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

const getList = (id) => {
  return fetch(`https://www.googleapis.com/books/v1/users/106535247720687769777/bookshelves/${id}/?key=AIzaSyBACq7M2VZ-nfZ60w20s2Kyq4OoRo-1LZE`)
    .then(res => handleError(res))
}

const getBooksInList = (id) => {
  return fetch(`https://www.googleapis.com/books/v1/users/106535247720687769777/bookshelves/${id}/volumes?key=AIzaSyBACq7M2VZ-nfZ60w20s2Kyq4OoRo-1LZE`)
    .then(res => handleError(res))
    .then(data => ({
      kind: data.kind,
      totalItems: data.totalItems,
      items: data.items ? removeDuplicates(cleanupBooks(data.items)) : []
    }))
}


export { getBooks, getBookDetails, getList, getBooksInList }

// https://www.googleapis.com/books/v1/users/106535247720687769777/bookshelves/1001/volumes?key=AIzaSyBACq7M2VZ-nfZ60w20s2Kyq4OoRo-1LZE