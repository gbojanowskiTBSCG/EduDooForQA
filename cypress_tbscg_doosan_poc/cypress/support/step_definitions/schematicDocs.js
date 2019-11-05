const url = 'https://dibh-dev-dxp-kags-preview.s3.amazonaws.com/schematics.html';

Given(/^Open Page with schematics component$/, () => {
  cy.visit(url);
});

When(/^Click Add a serial number$/, () => {
    cy.get('.container > .add-serial-control > .d-none').click()
});

When(/^Type serial number$/, () => {
    cy.get('#__BVID__45').type('ALJ812121')
});

When(/^Click ENTER key$/, () => {
    cy.get('#__BVID__45').type('{enter}', {force: true})
});

When (/^Click first schematics$/, () => {
  cy.get('tbody > :nth-child(1) > [aria-colindex="2"]').click()
});

Then (/^pdf file has been downloaded$/, () => {
  cy.get('#resultStats').should('be.visible')
});