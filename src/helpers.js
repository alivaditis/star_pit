function removeTags(str) {
	if (!str) {
    return
  }
  return str.replace( /(<([^>]+)>)/ig, '');
}

const cleanupBooks = (apiBooks) => {
  return apiBooks.map(book => {
    return ({
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors || [],
      publisher: book.volumeInfo.publisher,
      publishedDate: book.volumeInfo.publishedDate,
      images: {
        smallThumbnail: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "",
        thumbnail: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ""
      },
      status: null
    })
  })
}

const removeDuplicates = (books) => {
  return books.reduce((accumulator, current) => {
    let exists = accumulator.find(item => {
      return item.id === current.id;
    });
    if(!exists) { 
      accumulator = accumulator.concat(current);
    }
    return accumulator;
  }, []);
}

export { removeTags, cleanupBooks, removeDuplicates }