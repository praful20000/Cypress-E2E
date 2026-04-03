// describe('Home page',() =>{
 
//     it('Test Case1 - Lunch Browser',() =>{

//         cy.visit('https://www.google.com/')

//     })
// })

describe("Test Suite 1",()=>{
    beforeEach(function(){
        cy.log("-----Before Each ------")
    })
    it("Test Suite - Test Case 1",() =>{
        cy.log('---Before each ---')

    })

     it("Test Suite - Test Case 2",() =>{
        cy.log('---Before each ---')
        
    })
})

describe("Test Suite 2",()=>{
    it("Test Suite - Test Case 1",() =>{
        cy.log('---Before each ---')

    })

     it("Test Suite - Test Case 2",() =>{
        cy.log('---Before each ---')
        
    })
})