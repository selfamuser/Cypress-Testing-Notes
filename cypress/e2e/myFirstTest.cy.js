describe("firstTest", () => {

  //positive test where title is what we give
  it("verify title positive", () => {

    //to launch the url
    cy.visit("https://opensource-demo.orangehrmlive.com/")

    //to verify title of page is OrangeHRM or not
    cy.title().should('eq','OrangeHRM')
    
  })



  //negative tets
  it("verify title negative", () => {

    //to launch the url
    cy.visit("https://opensource-demo.orangehrmlive.com/")

    //to verify title of page is OrangeHRM or not
    cy.title().should('eq','OrHRM')
    
  });

});
