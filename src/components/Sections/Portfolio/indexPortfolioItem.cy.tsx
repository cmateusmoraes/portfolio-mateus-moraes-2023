import { PortfolioItem } from "./PortfolioItem";

describe("PortfolioItem", () => {
  it("renders anchor when url prop is provided", () => {
    cy.mount(
      <PortfolioItem
        image="/image/jobs/cultura-inglesa-festival.webp"
        title="Project"
        url="https://example.com"
        technologies={[]}
      >
        <div>Content</div>
      </PortfolioItem>
    );
    cy.get("a").should("have.attr", "href", "https://example.com");
  });

  it("renders without anchor when url prop is absent", () => {
    cy.mount(
      <PortfolioItem
        image="/image/jobs/cultura-inglesa-festival.webp"
        title="Project"
        technologies={[]}
      >
        <div>Content</div>
      </PortfolioItem>
    );
    cy.get("a").should("not.exist");
  });
});
