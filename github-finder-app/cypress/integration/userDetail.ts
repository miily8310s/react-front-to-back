describe("Aboutページのテスト", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });
  it("ユーザー詳細ボタンを押下するとユーザー詳細ページに遷移する", () => {
    cy.handleSearchUser();
    cy.get('[data-cy="user-detail-button"]').eq(1).click();
    cy.isEqualURL("user/miily8310s");
  });
});
