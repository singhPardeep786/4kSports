describe('Sample Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('4K') // Adjust this text to something visible on your homepage
  })
}) 