import { Menu } from "./index";

describe("Menu", () => {
    it("should render the component correctly", () => {
        cy.mount(<Menu onClickButton={() => { }} />);
        cy.get("nav").should("exist");
    });

    it("should call onClickButton when a link is clicked", () => {
        const onClickButton = cy.stub();
        cy.mount(<Menu onClickButton={onClickButton} />);
        cy.get("nav")
            .find("a:first").click({ force: true });
        cy.wrap(onClickButton).should("have.been.calledOnce");
    });

    it("should check that the Href attribute of the last menu item is valid", () => {
        let lastHref: string;

        cy.mount(<Menu onClickButton={() => { }} />);
        cy.get("nav")
            .find("a:last")
            .invoke("attr", "href")
            .then((href) => {
                if (href) {
                    lastHref = href;
                    cy.request(lastHref)
                        .its("status")
                        .should("equal", 200);
                } else {
                    throw new Error("The href attribute was not found in the last item of the menu.");
                }
            });
    });
});