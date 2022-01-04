describe("ホームページのテスト", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });
  it("レイアウトの確認", () => {
    const footerYear = new Date().getFullYear();
    cy.get('[data-cy="footer"]').contains(
      `Copyright © ${footerYear} All rights reserved`
    );
  });
  it("検索ボタンに名前を入力するとユーザー一覧が表示される", () => {});
});
