describe('Capture Images and Videos',()=>{

    it.skip('Capture screenshots',()=>{

        cy.visit("https://demo.opencart.com/");
       // cy.screenshot("HomePage-Opencart");

        cy.wait(4000);

        //cy.get("img[title='Your Store']").screenshot("Logo");

    })

    it("Capture screenshot automatically on failure",()=>{

        //It happens only when we execute through CLI

        cy.visit("https://demo.opencart.com/");

        cy.get("li:nth-child(7) > a:nth-child(1)")
        .click();

        cy.get("div[id='content'] h2")
        .should('have.text',"Tablets") //intentionally failing


    })

})