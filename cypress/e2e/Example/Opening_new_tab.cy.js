describe("Opening of new tab in cypress", () => {
    beforeEach(function() {
        cy.visit("https://selectorshub.com/xpath-practice-page/")
    })

        it("Open new tab in cypress Approach 1", () => {
            cy.contains("User Role").invoke("removeAttr","target").click()
    })

    it("Open new tab in cypress Approach 2", () => {
        cy.contains("Course Link").invoke("attr","target","_self").click()

    })

       it("Open YouTube Link", () => {
  cy.contains('a', 'SelectorsHub Youtube').invoke("removeAttr", "target").click()
})

    })

