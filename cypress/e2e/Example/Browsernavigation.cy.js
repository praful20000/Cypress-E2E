
describe('Browser Navigation using Cypress', () => {
    it('Perform BackWard and Forward Navigation in Cypress' ,() => {
        cy.visit("https://naveenautomationlabs.com/opencart/")
        // cy.get(".image").first().click()
        // cy.get(".image").eq(1).click()
        cy.contains("Software").click()
        cy.contains("There are no products to list in this category.").should("be.visible")
        cy.go('back')
        cy.go('forward')
        cy.contains("There are no products to list in this category.").should("be.visible")
    })

})