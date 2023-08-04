describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('https://www.googleapis.com/books/v1/volumes/8X4fEAAAQBAJ',
    {statusCode: 404}).as('404')
    cy.visit('http://localhost:3000/books/8X4fEAAAQBAJ')
    cy.intercept('https://www.googleapis.com/books/v1/volumes/eeeeeeeee',
    {statusCode: 503}).as('503')
  })
  
  it('passes', () => {
    cy.visit('http://localhost:3000/books/8X4fEAAAQBAJ')
    cy.wait('@404')
      cy.get('.no-results').contains('HTTP Error: 404 We could not load the content you are looking for')
  })

  it('passes', () => {
    cy.visit('http://localhost:3000/books/eeeeeeeee')
    cy.wait('@503')
      cy.get('.no-results').contains('HTTP Error: 503 We could not load the content you are looking for')
  })
})