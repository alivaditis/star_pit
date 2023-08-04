describe('book', () => {
  it('As a user, I should be able to see an image, title, author, publisher, published date, page count, description, and a button to add to to-read list of a book on its page', () => {
    cy.intercept('https://www.googleapis.com/books/v1/volumes/cO00U2Llra8C',
    {fixture: 'inversions.json'}).as('inversions')
      cy.visit('http://localhost:3000/books/cO00U2Llra8C')
        .get('.book-title').contains('Inversions')
        .get('.book-authors').contains('Iain M. Banks')
        .get('.secondary-detail').eq(0).contains('Simon and Schuster')
        .get('.secondary-detail').eq(1).contains('October 18, 2007')
        .get('.secondary-detail').eq(2).contains('352 pages')
        .get('.to-read-button').should('be.visible')
        .get('.book-description').contains('Iain M. Banks, the international bestselling author of The Player of Games and Consider Phlebas, is a true original, a literary visionary whose brilliant speculative fiction has transported us into worlds of unbounded imagination.')
  })
})