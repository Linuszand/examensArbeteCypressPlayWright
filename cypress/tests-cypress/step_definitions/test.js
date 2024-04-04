const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I have visited {string}', (url) => {
    cy.visit(url);
})

Given("I've clicked the button {string}", (button) => {
    cy.get(button).click();
})

When('I click the button {string}', (button) => {
    cy.get(button).click();
})

When('I click the button {string} again', (button) => {
    cy.get(button).click();
})

Then('I should see the text {string}', (text) => {
    cy.contains(text).should('be.visible');
})