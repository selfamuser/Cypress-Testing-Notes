describe("Handle url redirection",()=>{

    it("Approach1 using removing attribute",()=>{

        cy.visit("https://the-internet.herokuapp.com/windows")

        cy.get(".example >a").invoke('removeAttr',"target").click()
        //In the above steps
        //we used invoke funcation to remove attribute 
        //Syntax of .invoke("operation name","attribute")

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.go('back');
    })

    it("Approach2 using catching href value",()=>{

        cy.visit("https://the-internet.herokuapp.com/windows")

        cy.get('.example >a').then((e)=>{
            let url = e.prop('href')

            cy.visit(url);
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
        cy.wait(5000);

        cy.go('back');

    })

})