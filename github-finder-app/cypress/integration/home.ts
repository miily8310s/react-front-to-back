import { CyElement } from "../CyElemant";

describe("ホームページのテスト", () => {
  const handleSearchUser = () => {
    cy.get('[data-cy="user-search-input"]').type("miruoo");
    cy.get('[data-cy="user-search-button"]').click();
  };
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });
  it("レイアウトの確認", () => {
    const headerTitleElement = new CyElement("header-title").get();
    const headerAboutButtonElement = new CyElement("header-about-button").get();
    headerTitleElement.isContains("Github Finder");
    headerAboutButtonElement.shouldTargetBlank("/about");
    cy.get('[data-cy="header-home-button"]').contains(`Home`);
    cy.get('[data-cy="header-about-button"]').contains(`About`);
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
  it("検索ボタンに名前を入力するとユーザー一覧が表示される", () => {
    handleSearchUser();
    cy.get('[data-cy="user-detail-button"]').contains(`ユーザーの詳細を見る`);
    cy.get('[data-cy="user-search-clear"]').contains(`Clear`);
  });
});
