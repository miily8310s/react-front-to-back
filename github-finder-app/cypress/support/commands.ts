Cypress.Commands.add("handleSearchUser", () => {
  cy.get('[data-cy="user-search-input"]').type("miruoo");
  cy.get('[data-cy="user-search-button"]').click();
});
Cypress.Commands.add("isEqualURL", (url?: string) => {
  cy.url().should("eq", `${Cypress.config().baseUrl}${url ? url : ""}`);
});

declare namespace Cypress {
  interface Chainable<Subject> {
    handleSearchUser: () => Chainable<Subject>;
    isEqualURL: (url?: string) => Chainable<Subject>;
  }
}
