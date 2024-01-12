describe("Naviagtion among pages (-> or <-)",()=>{

    it("Navigation",()=>{

        cy.visit("https://demo.opencart.com/")

        cy.title().should('eq',"Your Store") //Home Page

        cy.get("li:nth-child(7) > a:nth-child(1)").click()

        cy.get("div[id='content'] h2")
        .should('have.text',"Cameras");  //on cameras page

        //To go back to home page

        cy.go('back');

        cy.wait(1000);

        cy.get("div[id='content'] h3")
        .should('have.text',"Featured");

        //Again to go to camera's page

        cy.go('forward')

        cy.wait(1000);
        cy.get("div[id='content'] h2")
        .should('have.text',"Cameras");


        cy.reload();



    })


})