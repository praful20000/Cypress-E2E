describe("Login with Fixture Data", () => {

    beforeEach(() => {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    })
    it("Login into the application using fixture data", () => {
        cy.fixture("login").then((data) => {
            cy.get("#input-email").type(data.email);
            cy.get("#input-password").type(data.password);
        });
        cy.get("input[type='submit']").click();
    });
})