const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");



Given('I have visited {string}', (url) => {
    cy.visit(url);
})

Given("I've clicked the button {string}", (button) => {
    cy.get(button).click();
})

When('I click the button {string}', (button) => {
    cy.contains(button).click();
})

When('I click the button {string} again', (button) => {
    cy.get(button).click();
})

When('I go back and forth until lives equals zero', () => {
    let bridgeValue = 'Bridge tries left: 3';

    function retryUntilZero() {
        // Click "walk across" button
        cy.get('#walk-across').click({ force: true });

        // Check the bridge value
        cy.contains('Bridge tries left:').invoke('text').then((text) => {
            bridgeValue = text;
            if (bridgeValue !== 'Bridge tries left: 0') {
                // Click "castle of stone" and "go back" buttons
                cy.contains('castle of stone').click({ force: true });
                cy.contains('go back').click({ force: true });

                // Continue looping
                retryUntilZero();
            }
        });
    }

    // Start the loop
    retryUntilZero();
});


Then('I should see the image {string}', (image) => {
    cy.get('#the-body').should('have.css', 'background-image').and('include', image);
})

Then('I should see the text {string}', (text) => {
    cy.contains(text).should('be.visible');
})