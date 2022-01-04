import { CyElement } from "../CyElement";

describe("ホームページのテスト", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });
  it("レイアウトの確認", () => {
    cy.get('[data-cy="header-title"]').contains(`Github Finder`);
    cy.get('[data-cy="header-home-button"]').contains(`Home`);
    const headerAboutButtonElement = new CyElement("header-about-button").get();
    headerAboutButtonElement.isContains(`About`);
    headerAboutButtonElement.shouldHaveUrl("/about");
    cy.get('[data-cy="user-search-input"]').should(
      "have.attr",
      "placeholder",
      `ユーザー名を入力`
    );
    cy.get('[data-cy="user-search-button"]').contains(`検索`);
    const footerYear = new Date().getFullYear();
    cy.get('[data-cy="footer"]').contains(
      `Copyright © ${footerYear} All rights reserved`
    );
  });
  it("ホームボタンを押下してもURL遷移しない", () => {
    cy.get('[data-cy="header-home-button"]').click();
    cy.url().should("eq", Cypress.config().baseUrl);
  });
  describe("検索ボタンの動作確認", () => {
    it("入力欄が空のまま、検索ボタンを押下するとユーザー一覧が表示されない", () => {
      cy.get('[data-cy="user-search-button"]').click();
      cy.get('[data-cy="user-detail-button"]').should(`not.exist`);
      cy.get('[data-cy="user-search-clear"]').should(`not.exist`);
    });
    it("入力欄を入力し、検索ボタンを押下するとユーザー一覧が表示される", () => {
      cy.handleSearchUser();
      cy.get('[data-cy="user-detail-button"]').contains(`ユーザーの詳細を見る`);
      cy.get('[data-cy="user-search-clear"]').contains(`Clear`);
    });
  });
});
