import 'cypress-iframe';

describe("i-Frames",()=>{

    it.skip("iFrame testing Approach1",()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

        const iframe = cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

      
        iframe.clear()
      
        iframe.type("Hi This is utkarsh {cmd+a}");
      
       cy.get("button[title='Bold']").click();


    })

    it.skip("iFrame testing by using custom command",()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.getIFrame("#mce_0_ifr").clear().type("Hi from custom command {cmd+a}")
        
        cy.get("button[title='Bold']").click();

    })

    it("iFrame Approach3 using cypress iFrame plugins",()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

        //npm install -D cypress-iframe
        //import "cypress-iframe" in file to use
        //1- cy.frameLoaded("attribute") = Loads the iFrame
        //2- cy.iFrame("attribute") works as get attribute

        cy.frameLoaded("#mce_0_ifr") //frame is loaded

        cy.iframe("#mce_0_ifr").clear().type("Hi From cypress iframe plugin")

    })

})