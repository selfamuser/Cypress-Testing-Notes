//Clicking on link using label

//overwriting existing contains command

//re-useable custom commands

describe("Custom Commands",()=>{

    it("Handling Links without using custom command",()=>{

        cy.visit("https://demo.nopcommerce.com/")

        cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)")
        .scrollIntoView({duration:2000}).click();

        cy.wait(2000);

        cy.get("div[class='product-name'] h1")
        .should('have.text',"Apple MacBook Pro 13-inch");


    });

    it("Handling link with custom command defined in support->commands.js file",()=>{

        cy.visit("https://demo.nopcommerce.com/")

        cy.clickLink("Apple MacBook Pro 13-inch")

        cy.get("div[class='product-name'] h1")
        .should('have.text',"Apple MacBook Pro 13-inch");


    })



})