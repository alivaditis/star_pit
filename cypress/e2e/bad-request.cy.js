describe('error testing', () => {
  beforeEach(() => {
    cy.intercept('https://www.googleapis.com/books/v1/volumes/8X4fEAAAQBAJ',
    {statusCode: 404}).as('404')
    cy.visit('http://localhost:3000/books/8X4fEAAAQBAJ')
    cy.intercept('https://www.googleapis.com/books/v1/volumes/eeeeeeeee',
    {statusCode: 503}).as('503')
  })
  
  it('404 error', () => {
    cy.visit('http://localhost:3000/books/8X4fEAAAQBAJ')
    cy.wait('@404')
      cy.get('.no-results').contains('HTTP Error: 404 We could not load the content you are looking for')
  })

  it('503 error', () => {
    cy.visit('http://localhost:3000/books/eeeeeeeee')
    cy.wait('@503')
      cy.get('.no-results').contains('HTTP Error: 503 We could not load the content you are looking for')
  })

  it('as a user, I should be informed if the route I am trying to access does not exist', () => {
    cy.visit('http://localhost:3000/not-a-page')
      .url().should('includes', '/not-a-page')
      .get('.empty').contains("There's nothing here!")
  })

})