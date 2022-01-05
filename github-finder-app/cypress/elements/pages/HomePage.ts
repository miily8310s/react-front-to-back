// import { CyElement } from "../../CyElemant";

// namespace HomePage {
//   export class headerTitleElement implements CyElement {
//     private _element: Cypress.Chainable;
//     private _selector: string;
//     constructor() {
//       this._selector = "header-title";
//     }

//     get(): this {
//       this._element = cy.get(`[data-cy=${this._selector}]`, { timeout: 10000 });
//       return this;
//     }

//     isContains(containText: string): Cypress.Chainable {
//       return this._element.contains(containText);
//     }

//     shouldTargetBlank(url: string): void {
//       this._element.should("have.attr", "href", url);
//     }
//   }
// }
