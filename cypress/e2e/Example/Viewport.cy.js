describe("Test Automation",()=>{
    it("View Port Test",() =>{
        cy.viewport('iphone-3')
        cy.visit('https://www.amazon.com/')
    })
})