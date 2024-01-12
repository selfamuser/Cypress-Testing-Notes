import 'cypress-iframe';
require('@4tw/cypress-drag-drop');


describe("Mouse Operations",()=>{

    it.skip("Mouse Hovering",()=>{

        cy.visit("https://demo.opencart.com/")

        //Before hovering mouse it should not be visible
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('not.be.visible');

        //here we are hovering our mouse
        cy.get('.nav > :nth-child(1) > .dropdown-toggle')
        .trigger('mouseover').click()

        //here we will check wheather the list element is visible or not after hovering
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible');

    })

    it.skip("Right Click",()=>{

        //Approach 1 using .trigger('contextmenu')

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        cy.get(".context-menu-one.btn.btn-neutral")
        .trigger('contextmenu');

        cy.get('.context-menu-icon-edit')
        .should('be.visible')

        cy.get('.context-menu-icon-edit').click()


        //Approach 2 using rightclick()

        cy.get(".context-menu-one.btn.btn-neutral")
        .rightclick()

        cy.get('.context-menu-icon-edit')
        .should('be.visible')

    })

    it.skip("Double Click action",()=>{

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")

        cy.frameLoaded("#iframeResult")

        cy.screenshot();

        cy.iframe("#iframeResult").find("#field2")
        .should('have.value',"")

        cy.iframe("#iframeResult")
        .find("button[ondblclick='myFunction()']")
        .trigger('dblclick');

        cy.screenshot();

        cy.iframe("#iframeResult")
        .find('#field2')
        .should('have.value',"Hello World!")
    })

    // it("Drag and drop with plugin",()=>{

    //     cy.visit("https://www.globalsqa.com/demo-site/draganddrop/")

    //     cy.frameLoaded(".demo-frame.lazyloaded")

    // })

    it("Scrolling Page",()=>{

        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")

        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img')
        .scrollIntoView({duration:3000});

    })
 
})