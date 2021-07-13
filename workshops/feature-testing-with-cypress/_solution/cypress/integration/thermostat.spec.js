describe('Thermostat home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows a welcome message!', () => {
    cy.get("#welcome").should('contain', 'Hello, folks!')
  })

  it('when up button clicked then temp increases by 1 ', () => {
    cy.get("#up-button").click()
    cy.get("#message").should('contain', '21')
  })

  it('when down button clicked then temp decreases by 1 ', () => {
    cy.get("#down-button").click()
    cy.get("#message").should('contain', '19')
  })
})
