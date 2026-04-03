describe("Read Write Test Suite", () => {

    it("Write to a File", () => {
        cy.writeFile("firstTest.txt", "Cypress Test \n")
        cy.writeFile("firstTest.txt", "Hello World", { flag: "a+" })

        cy.writeFile("cypress/fixtures/Test.json", {
            data1: "Test1",
            data2: "Test2"
        })
    })

    it("Read File", () => {
        cy.readFile("firstTest.txt").then((data) => {
            cy.log("++print++", data)
        })
    })

})