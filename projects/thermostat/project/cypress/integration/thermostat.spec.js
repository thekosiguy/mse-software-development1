describe('Thermostat home page', () => {
    it('Shows Thermostat text!', () => {
        cy.visit('/');
        // change the assertion to expect a message you want
        // see it fail, and then update your html file to make it pass.

        cy.get("#welcome").should('contain', 'Thermostat');
    });

    it('when up button clicked then temp increases by 1 ', () => {
        cy.visit('/');
        cy.get("#button").click();
        cy.get("#message").should('contain', '21');
    });

    it('when down button clicked then temp decreases by 1', () => {
        cy.visit('/');
        cy.get("#button1").click();
        cy.get("#message").should('contain', '19');
    });

    it('when toggle button clicked, toggle power mode', () => {
        //cy.visit('/');

    });
})
