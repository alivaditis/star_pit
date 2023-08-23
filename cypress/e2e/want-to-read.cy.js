describe('want to read', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=%22terraformers%22+subject:%22fiction_science_fiction%22&startIndex=0&printType=books',
    {fixture: 'search.json'}).as('getBooks')

    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes/Wo9pEAAAQBAJ',
    {fixture: 'terraformers'}).as('getBook')

    cy.visit('http://localhost:3000/to-read')
  })
  
  it.skip('as a user I should see a list of my want-to-read books when visiting the to-read page, each item should have a title, author, and published year, number of items should be reflected in the heading', () => {
    cy.get('.list-heading').contains('(4)')
      .get('.results-container').find('.card').should('have.length', '4')
      .get('.card-image').should('have.attr', 'src', 'http://books.google.com/books/content?id=Wo9pEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api')
      .get('.card').first().contains('The Terraformers')
      .get('.card').first().contains('Annalee Newitz')
      .get('.card').first().contains('2023')
      .get('.card-image').last().should('have.attr', 'src', 'http://books.google.com/books/content?id=WsCuU0VM8vcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api')
      .get('.card').last().contains('Vector Prime: Star Wars Legends')
      .get('.card').last().contains('R.A. Salvatore')
      .get('.card').last().contains('2003')
  })

  it.skip('as a user I should be able to delete list of my want-to-read books when visiting the to-read page, each item should have a title, author, and published year', () => {
    cy.get('.to-read-button').first().click()
      .get('.list-heading').contains('3')
      .get('.results-container').find('.card').should('have.length', '3')
      .get('.to-read-button').first().click()
      .get('.list-heading').contains('2')
      .get('.results-container').find('.card').should('have.length', '2')
      .get('.to-read-button').first().click()
      .get('.list-heading').contains('1')
      .get('.results-container').find('.card').should('have.length', '1')
      .get('.to-read-button').first().click()
      .get('.list-heading').contains('Want to Read')
      .get('.results-container').find('.card').should('not.exist')
      .get('.no-results').contains('Add some books to your "Want to Read" list.')
  })

  it.skip('as a user I should be able to search for a book add or remove it to my to-read and see it in my list when viewing the to-read page', () => {
    cy.get('.search--input').type('terraformers')
      .get('.search--button').click()
      .url().should('include', '/search/terraformers/0')
      .get('.to-read-button').first().should('have.attr', 'style', 'background-color: rgb(37, 91, 112);')
      .get('.to-read-button').first().click()
      .get('.to-read-button').first().should('have.attr', 'style', '')
      .get('.dropdown-content').invoke('show')
      .get('.tab').first().click()
      .url().should('include', '/to-read')
      .get('.list-heading').contains('3')
  })

  it.skip('as a user I should be able to add or remove a book from its description page', () => {
    cy.get('.card-title').first().click()
      .url().should('include', 'http://localhost:3000/books/Wo9pEAAAQBAJ')
      .get('.to-read-button').first().should('have.attr', 'style', 'background-color: rgb(37, 91, 112);').click()
      .should('have.attr', 'style', '')
      .get('.dropdown-content').invoke('show')
      .get('.tab').first().click()
      .url().should('include', '/to-read')
      .get('.list-heading').contains('3')
      .get('.results-container').find('.card').should('have.length', '3')
  })

})