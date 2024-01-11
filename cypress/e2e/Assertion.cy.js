
import 'cypress-xpath'


describe("Assertions Demo",()=>{

    it("Implicit Assertion",()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //should & and implicit assertion

        //To check wheather we hai the orangehrmlive in url or not
        //*** should("keyword","condition/thing to be tested") ***
        cy.url().should('include','orangehrmlive')


        //To check wheather the capture url is equal to our url or not
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')



        //The above two assertions can be combined

        cy.url().should('include','orangehrmlive')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        //Since the above contains multiple should we can use AND

        cy.url().should('include','orangehrmlive')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        //To check on the title of web page

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('not.eq','Lamda')
        .and('contains','HRM')


        //to check wheather the logo is displayed or not

        cy.get('.orangehrm-login-branding > img')
        .should('be.visible')
        .and('exist')


        //To check how many links are present in page and print it

        cy.xpath("//a").should('have.length','5')
        .then(links=>{
            const numOfLinks = links.length
            cy.log(`Number of links are ${numOfLinks}`)
        })


        //To check wheather if any text entered is correct or not

        cy.get("input[placeholder='Username']").type("Admin") //it will provide value in input box

        cy.get("input[placeholder='Username']")
        .should('have.value','Admin')

    })


    it("Explicit Assertion",()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("input[placeholder='Username']").type("Admin")

        cy.get("input[placeholder='Password']").type("admin123")

        // cy.screenshot()

        cy.get("button[type='submit']").click()

        let expectedName = "Paul Collings";

        cy.get(".oxd-userdropdown-name").then((name)=>{

        let displayedName = name.text()

        expect(displayedName).to.equal(expectedName) //implementation of expect when BDD

        //expect(displayedName).to.not.equal(expectedName) NEGATIVE ASSERTION

        
        //-----TDD-----

        assert.equal(displayedName,expectedName)
        assert.notEqual(displayedName,"pool")
        

        })




    })


})




/*
    Notes-----

    1-> cy.url() this command gets the url we have visit

    2-> cy.should('keyword/condition' , 'Activity')
        eq, contains, exist, have.length, have.value,....

    3-> If we have multiple validation for a single element we can use multiple should in same line

    4-> If we have multiple should validations we can use AND assertion to minise duplicacy

    5-> To get the title of the page we use cy.title()


    Explicit Assertions

    1-> expect - Behviour Driven Development Approach

    2-> assert - Test Driven Development

    3-> To implement explicit assertion we need to create Javascript functions to execute them
*/