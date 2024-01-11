

describe('cssLocators',()=>{

    it('testCssLocators',()=>{
        cy.visit('https://www.youtube.com/')

        cy.get('.ytd-searchbox').type("sourav")

        cy.get('#search-icon-legacy').click()

        cy.get('#title').contains('Latest from Sourav Joshi Vlogs')
    })


})