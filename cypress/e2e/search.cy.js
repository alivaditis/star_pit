describe('search spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=%22terraformers%22+subject:%22fiction_science_fiction%22&startIndex=0&printType=books',
      {fixture: 'search.json'}).as('getBooks')
    cy.intercept('GET', 'https://www.googleapis.com/books/v1/volumes?q=%22asewaewaerweaewaewaewaewaewa%22+subject:%22fiction_science_fiction%22&startIndex=0&printType=books',
      {fixture: 'noresults.json'}).as('noresults')
    cy.visit('http://localhost:3000/')
  })
  
  it('as a user I should be able to type into the search field, submit, and see a list of results', () => {
    cy.get('.search--input').type('terraformers')
      .get('.search--button').click()
      .url().should('include', '/search/terraformers/0')
      .get('.results-container').find('.card').should('have.length', '9')
      .get('.card').first().contains('The Terraformers')
      .get('.card').first().contains('Annalee Newitz')
      .get('.card').first().contains('2023')
      .get('.card').last().contains('No One Can Hear You Train')
      .get('.card').last().contains('Cassandra Morphy')
      .get('.card').last().contains('2021')
      .get('.card').first().click()
  })

  it('as a user I should see a message telling me if there are no results', () => {
    cy.get('.search--input').type('asewaewaerweaewaewaewaewaewa')
      .get('.search--button').click()
      .get('.no-results').contains('No results for asewaewaerweaewaewaewaewaewa')
  })
})