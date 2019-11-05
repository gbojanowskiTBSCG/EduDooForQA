const url = 'https://google.co.uk';

Given(/^I open Google page$/, () => {
  cy.visit(url);
});

Given (/^I type Doosan into search$/, () => {
  cy.get('.gLFyf').type('Doosan')
});

Given (/^I select first suggestion$/, () => {
  cy.get(':nth-child(1) > .suggestions-inner-container > .sbtc > .sbl1 > span').click({ force: true })
});

//https://www.npmjs.com/package/cypress-cucumber-preprocessor

Then (/^Site contains information about results count$/, () => {
  cy.get('#resultStats').should('be.visible')
});