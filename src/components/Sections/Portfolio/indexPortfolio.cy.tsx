import { Portfolio } from "./index";

describe("Portfolio", () => {
  it("renders portfolio items without links", () => {
    cy.mount(<Portfolio />);
    cy.get(".jobs").find("a").should("not.exist");
  });
});
