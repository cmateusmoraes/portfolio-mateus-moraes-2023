import { ButtonArrow } from "./index";

describe("ButtonArrow", () => {
  it("renders arrow image with alt text", () => {
    cy.mount(<ButtonArrow />);
    cy.get("img").should("have.attr", "src", "/image/arrow-white.svg");
    cy.get("img").should("have.attr", "alt", "Seguir");
  });
});
