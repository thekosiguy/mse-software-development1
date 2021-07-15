describe('Thermostat home page', () => {
  it('shows a welcome message!', () => {
    cy.visit('/')
    // change the assertion to expect a message you want
    // see it fail, and then update your html file to make it pass.

    cy.get("#welcome").should('contain', 'add your welcome message here')
  })

  xit('when button clicked then temp increases by 1 ', () => {
    cy.visit('/')
    cy.get("#button").click()
    cy.get("#message").should('contain', '21')
  })
})
