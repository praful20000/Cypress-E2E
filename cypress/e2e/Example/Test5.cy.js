describe('Handling Child Window', function () {

  it('Should Handle Child Window', function () {

    // Ignore app-side JS errors
    Cypress.on('uncaught:exception', () => {
      return false
    })

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     
    cy.get('#opentab')
      .invoke('removeAttr', 'target')
      .click()

    cy.origin('https://www.qaclickacademy.com', () => {
      cy.get("#navbarSupportedContent a[href*='about']").click()
      cy.get(".mt-50 h2").should('contain', 'QAClick Academy')
    })

  })

})
