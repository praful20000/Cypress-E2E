describe("Refresh Page Test", () => {

    it("Refresh the page and verify the content", () => {
        cy.visit("https://www.amazon.com./")
        cy.contains("Today's Deals").should("be.visible")

        // Refresh the page
        cy.reload()
        cy.contains("Today's Deals").should("be.visible")

        cy.reload({timeout:5000})
        cy.contains("Today's Deals").should("be.visible")



    })
})