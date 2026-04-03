
describe(' Cypress Example', () => {
    it('DOM command in cyress' ,() => {
        cy.visit("https://naveenautomationlabs.com/opencart/")
        // cy.get(".image").first().click()
        // cy.get(".image").eq(1).click()
        cy.contains("MacBook").click()
    })

})