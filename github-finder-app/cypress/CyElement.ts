export class CyElement {
  private _selector: string;
  private _element: Cypress.Chainable;
  constructor(selector: string) {
    this._selector = selector;
  }

  get(): this {
    this._element = cy.get(`[data-cy=${this._selector}]`, { timeout: 10000 });
    return this;
  }

  isContains(containText: string): Cypress.Chainable {
    return this._element.contains(containText);
  }

  shouldHaveUrl(url: string): void {
    this._element.should("have.attr", "href", url);
  }
  shouldTargetBlank(url: string): void {
    this._element
      .should("have.attr", "href", url)
      .and("have.attr", "target", "_blank");
  }
}
