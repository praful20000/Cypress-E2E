describe('My First Test Suite', function () {

  it('My First Test case', function () {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    cy.get('.search-keyword').type('ca')
    cy.wait(1000)

    // selenium get hits URL, cypress get works like findElement
    cy.get('.product').should('have.length', 5)
    cy.get('.product:visible').should('have.length', 4)

    // Parent child chaining
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length', 4)

    cy.get(':nth-child(3) > .product-action > button').click()

    cy.get('@productLocator')
      .find('.product')
      .eq(2)
      .contains('ADD TO CART')
      .click()
      .then(function () {
        console.log('sf')
      })

    // Add Cashews to cart
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {

      const textVeg = $el.find('h4.product-name').text()
      if (textVeg.includes('Cashews')) {
        cy.wrap($el).find('button').click()
      }

    })

    // Assert logo text
    cy.get('.brand').should('have.text', 'GREENKART')

    // Print logo text in Cypress logs
    cy.get('.brand').then(function (logoelement) {
      cy.log(logoelement.text())
    })

  })

})
