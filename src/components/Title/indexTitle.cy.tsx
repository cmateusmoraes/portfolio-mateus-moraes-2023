import React from "react";
import { Title } from "./index";

describe("Title", () => {
  it("uses custom text for the title", () => {
    cy.mount(<Title>EXEMPLO DE TÍTULO</Title>);
    cy.get('[data-cy="titleText"]').should("exist");
    cy.get("[data-cy=titleText]").should("contains.text", "EXEMPLO DE TÍTULO");
  });

  it("the line exists and if it is visible", () => {
    cy.mount(<Title>EXEMPLO DE TÍTULO</Title>);
    cy.get('[data-cy="line"]').should("exist");
    cy.get("[data-cy=line]").should("be.visible");
  });
});
