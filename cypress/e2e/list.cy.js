describe('list', () => {
  beforeEach(() => {
    cy.intercept('https://www.googleapis.com/books/v1/users/106535247720687769777/bookshelves/1001/?key=AIzaSyBACq7M2VZ-nfZ60w20s2Kyq4OoRo-1LZE',
    {fixture: 'bookshelf.json'}).as('getBookshelf')
    cy.intercept('https://www.googleapis.com/books/v1/users/106535247720687769777/bookshelves/1001/volumes?key=AIzaSyBACq7M2VZ-nfZ60w20s2Kyq4OoRo-1LZE',
    {fixture: 'bookshelfVolumes'}).as('getBookshelfVolumes')
    cy.visit('http://localhost:3000/lists/1001')
  })
  
  it('as a user I should see a list title, description, and items', () => {
    cy.wait('@getBookshelfVolumes')
      .get('.list-img').should('have.attr', 'src', '/images/delany.jpeg')
      .get('.list-heading').contains('Celebrating the Works of Samuel R Delany (7)')
      .get('.list-description').contains('Embark on a mesmerizing journey through the literary cosmos of Samuel R. Delany')
      .get('.card-image').first().should('have.attr', 'src', 'http://books.google.com/books/content?id=35RBDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api')
      .get('.card').first().contains('Nova')
      .get('.card').first().contains('Samuel R. Delany')
      .get('.card').first().contains('2002')
      .get('.card-image').last().should('have.attr', 'src', 'http://books.google.com/books/content?id=sCmIxJscrdEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api')
      .get('.card').last().contains('Trouble on Triton')
      .get('.card').last().contains('Samuel R. Delany')
      .get('.card').last().contains('1996')
  })
})