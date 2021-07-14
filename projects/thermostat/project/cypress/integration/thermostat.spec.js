describe('Thermostat home page', () => {
    it('Shows Thermostat text!', () => {
        cy.visit('/');
        // change the assertion to expect a message you want
        // see it fail, and then update your html file to make it pass.

        cy.get("#welcome").should('contain', 'Thermostat');
    });

    it('when up button clicked then temp increases by 1 ', () => {
        cy.visit('/');
        cy.get("#upButton").click();
        cy.get("#upButton").click();
        cy.get("#message").should('contain', '22');
    });

    it('when down button clicked then temp decreases by 1', () => {
        cy.visit('/');
        cy.get("#downButton").click();
        cy.get("#message").should('contain', '19');
    });

    it('when toggle button clicked, toggle power mode', () => {
        cy.visit('/');
        cy.get("#toggleButton").click();
        cy.get("#dot").should('have.css', 'background-color')
            .and('eq', 'rgb(255, 0, 0)');
    });

    it('when reset button clicked, stats are reset', () => {
        cy.visit('/');
        
        cy.get("#upButton").click();
        cy.get("#upButton").click();
        cy.get("#upButton").click();
        cy.get("#upButton").click();

        cy.get("#resetButton").click();

        cy.get("#message").should('contain', '20');

    })

    it('Check high temperature colour', () => {
        cy.visit('/');
        cy.get("#toggleButton").click();
        for (let i = 0; i <= 10; i++) {
            cy.get("#upButton").click();
        }

        cy.get("#background").should('have.css', 'background-color')
            .and('eq', 'rgb(150, 0, 0)');
    })

    it('Check low temperature colour', () => {
        cy.visit('/');
        for (let i = 0; i <= 10; i++) {
            cy.get("#downButton").click();
        }
        cy.get("#background").should('have.css', 'background-color')
            .and('eq', 'rgb(0, 255, 0)');
    })
})
