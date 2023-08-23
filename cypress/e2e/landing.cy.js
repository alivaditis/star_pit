describe('landing', () => {
  beforeEach(() => {
    cy.intercept('https://www.googleapis.com/books/v1/users/106535247720687769777/bookshelves/1001/?key=AIzaSyBACq7M2VZ-nfZ60w20s2Kyq4OoRo-1LZE',
    {fixture: 'bookshelf.json'}).as('getBookshelf')

    cy.intercept('https://www.googleapis.com/books/v1/users/106535247720687769777/bookshelves/1001/volumes?key=AIzaSyBACq7M2VZ-nfZ60w20s2Kyq4OoRo-1LZE',
    {fixture: 'bookshelfVolumes'}).as('getBookshelfVolumes')
    
    cy.visit('http://localhost:3000')
  })
  
  it('As a user I should see a Home button "The Star Pit", a "My Books" tab button, a search bar and content links', () => {
    cy.get('h1').contains('The Star Pit')
      .get('h2').first().contains('My Books')
      .get('.search--input').should('be.visible')
      .get('.spotlight').first().contains('Celebrating the Works of Samuel R. Delany')
      .get('.spotlight').last().contains('Octavia E. Butler: The Patternist Series')
  })

  it("As a user I should be able to navigate to the landing page when clicking the Home button 'The Star Pit'", () => {
    cy.get('h1').click()
      .url().should('includes', '/')
  })

  it("As a user I should be able to navigate to the to-read page when clicking the 'My Books' tab button", () => {
    cy.get('h2').first().click()
      .get('.dropdown-content').invoke('show')
      .get('.tab').first().click()
      .url().should('includes', '/to-read')
  })

  it("As a user I should be able to navigate to a list by clicking the content link", () => {
    cy.get('.spotlight').first().click()
      .url().should('includes', 'lists/1001')
  })

})