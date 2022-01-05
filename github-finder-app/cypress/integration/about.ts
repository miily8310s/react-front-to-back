describe("Aboutページのテスト", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });
  it("Aboutボタンを押下するとAboutページに遷移する", () => {
    cy.get('[data-cy="header-about-button"]').click();
    cy.isEqualURL("about");
  });
});
