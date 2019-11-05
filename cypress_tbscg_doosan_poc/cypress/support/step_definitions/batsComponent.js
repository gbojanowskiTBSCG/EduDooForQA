const url = 'https://dibh-dev-dxp-kags-preview.s3.amazonaws.com/bats.html';

Given(/^Page with BATs component$/, () => {
  cy.visit(url);
});

When (/^Page filtered by serial number$/, () => {
    cy.get('.container > .add-serial-control > .d-none').click()
    cy.get('[data-test-id="add-serial-input"]').type('ALJ812121')
    cy.get('[data-test-id="add-serial-input"]').type('{enter}', {force: true})
});

Then (/^code is displaying$/, () => {
    cy.get(".col").contains("02-16");
});

Then (/^code description is displaying$/, () => {
    cy.get(":nth-child(2) > .text-center > h2").contains("Hydraulic Implement Filter Not Connected");
});

Then (/^detailed description is displaying$/, () => {
    cy.get(":nth-child(2) > .text-center > p").contains("A Code 02-16 occurs when the Bobcat Controller");
});

Then (/^component links are displaying$/, () => {
    cy.get(":nth-child(2) > .box").contains("Loader Hydraulic Implement");
});

Then (/^causes are displaying$/, () => {
    cy.get(".list-checked").contains("corrosion");
});

Then (/^conditions for alarm are displaying$/, () => {
    cy.get(":nth-child(4) > .box").contains("Engine not running");
});

Then (/^conditions for clearing alarm are displaying$/, () => {
    cy.get(":nth-child(5) > .box > :nth-child(2)").contains("Self resetting");
});

Then (/^troubleshooting chart notes are displaying$/, () => {
    cy.get(":nth-child(3) > .text-center").contains("Key switch");
});

Then (/^troubleshooting chart steps are displaying$/, () => {
    cy.get("tbody > :nth-child(1) > [aria-colindex=\"2\"]").contains("Jumper signal wire 3430");
    cy.get("tbody > :nth-child(1) > .label-yes").contains("Go to Step 2.");
    cy.get("tbody > :nth-child(1) > .label-no").contains("Repair or replace Mainframe harness.");
});

Then (/^warning data are displaying$/, () => {
    cy.get(":nth-child(5) > .box > :nth-child(3)").contains("Instructions are necessary");
	cy.get(".box > :nth-child(4) > div").contains("Never work on a machine");
	cy.get(".box > :nth-child(5) > div").contains("Put jackstands under the");
});