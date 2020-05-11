describe("Hello Cypress", () => {
    it("visit the who is next site", () => {
        cy.visit(Cypress.env('host'));
      });
    it("should render default Learn React text", () => {
        cy.contains("Google Search");
    });
});