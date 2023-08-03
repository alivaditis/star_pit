describe('want to read', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/to-read')
  })
  it('as a user I should see a list of my want-to-read books when visiting the to-read page, each item should have a title, author, and published year', () => {
    cy.get('.results-container').find('.card').should('have.length', '4')
      .get('.card-image').should('have.attr', 'src', 'http://books.google.com/books/content?id=Wo9pEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api')
      .get('.card').first().contains('The Terraformers')
      .get('.card').first().contains('Annalee Newitz')
      .get('.card').first().contains('2023')
      .get('.card-image').last().should('have.attr', 'src', 'http://books.google.com/books/content?id=WsCuU0VM8vcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api')
      .get('.card').last().contains('Vector Prime: Star Wars Legends')
      .get('.card').last().contains('R.A. Salvatore')
      .get('.card').last().contains('2003')
  })
})