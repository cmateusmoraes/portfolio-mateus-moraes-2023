import { IcoHamburguer } from "./index";

describe("IcoHamburguer", () => {
  it("calls onClick when clicked", () => {
    const onClick = cy.stub();
    cy.mount(<IcoHamburguer isOpen={false} onClick={onClick} />);
    cy.get("[data-cy=hamburger]").click();
    cy.wrap(onClick).should("have.been.calledOnce");
  });
});
