describe("Upload File Request", () => {

  it("TC1 - Input Field || upload file", () => {
    
    cy.visit("https://www.lambdatest.com/selenium-playground/upload-file-demo")
    
    cy.get("#file").selectFile("level1file-sample_150kB.pdf")
    
  });

  it("TC2 - Dropping of file", () => {

    cy.visit("https://www.ilovepdf.com/pdf_to_word")
    cy.fixture("1773815707521.pdf").as("pdf")
    cy.get(".uploader__droptxt")
      .selectFile("@pdf", { action: "drag-drop" })

  });

});