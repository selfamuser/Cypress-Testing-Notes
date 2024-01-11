
describe("Handling dropdowns",()=>{

    // it("dropdown",()=>{

    //     cy.visit('https://www.zoho.com/commerce/free-demo.html')

    //     cy.get('#zcf_address_country').select('Italy')
    //     .should('have.value',"Italy")


    // })

    it("Auto suggest dropdown",()=>{

        cy.visit('https://www.wikipedia.org/')

        cy.get('#searchInput').type("Delhi")

        cy.get('.suggestion-title')
        .contains("Delhi University")
        .click()



    })

    it("Dynamic dropdowns",()=>{

        cy.visit('https://www.google.com/')

        cy.get('#APjFqb').type("cypress automation")

        cy.get('div.wM6W7d>span').should('have.length',13)

        cy.get('div.wM6W7d>span').each(($ele,index,$list)=>{

            if($ele.text()=="cypress automation tool"){
                cy.wrap($ele.click())
            }

        })

        cy.get('#APjFqb').should('have.value','cypress automation tool')

    })

})