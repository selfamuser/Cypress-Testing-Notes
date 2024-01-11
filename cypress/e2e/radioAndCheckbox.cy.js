describe("Check UI Elements",()=>{

    it("Check radio buttons",()=>{

        cy.visit("url")

        //to check if radio button is visible
        cy.get("selector").should('be.visible')

        //check if we can check only one radio button at a time

        cy.get("selector").check().should('be.checked')
        cy.get("selector").should('not.be.checked')

    })


    it("Check checkboxes",()=>{

        //visibility of element
        cy.get('selector').should('be.visible')

        //selecting single checkbox 
        cy.get('selector').check().should('be.visible')

        //unselecting checkbox
        cy.get('selector').uncheck().should('not.be.checked')

        //selecting all check boxes
        cy.get('selector which gives all check boxes').check()
        .should('be.checked')
        cy.get('selector which gives all check boxes').uncheck()
        .should('not.be.checked')
        

    })

})