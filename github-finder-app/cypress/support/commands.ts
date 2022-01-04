Cypress.Commands.add("handleSearchUser", () => {
  cy.get('[data-cy="user-search-input"]').type("miruoo");
  cy.get('[data-cy="user-search-button"]').click();
});

declare namespace Cypress {
  interface Chainable<Subject> {
    handleSearchUser: () => Chainable<Subject>;
  }
}
