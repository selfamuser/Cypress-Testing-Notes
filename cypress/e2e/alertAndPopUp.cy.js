describe("Alerts",()=>{

    it("Js Alerts",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsAlert()']").click()

        //event for normal alert

        cy.on("window:alert",(t)=>{
            expect(t).to.contains("I am a JS Alert")
        })

        //alert window automatically closed

        //To verify wheather the text appears or not

        cy.get("#result").should('have.text',"You successfully clicked an alert")


    });


    it("Confirmation Alert",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(e)=>{

            expect(e).to.contains("I am a JS Confirm")

        })

        //Cypress automatically clicks Ok and closes the window

        cy.get("#result").should('have.text',"You clicked: Ok")

    })

    it("Confirmation Alert-Pressing cancel",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()

        //Here we make the function false

        cy.on('window:confirm',()=>false)

        cy.get("#result").should('have.text',"You clicked: Cancel")

    })

    it("Javascript Prompt with message",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")


        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('welcome');

        })

        cy.get("button[onclick='jsPrompt()']").click()

        //automatically press ok

        cy.get("#result").should('have.text',"You entered: welcome")


    })



    it("Authenticated Alert",()=>{

    //Approach 1  when we provide username and password along with url

    cy.visit("https://the-internet.herokuapp.com/basic_auth",{
        auth:{username: "admin",password:"admin"}
    })

    cy.get("div[class='example'] p").should('have.contain',"Congratulations! You must have the proper credentials.")

    //Approach 2 When passing URL we will inject username and password


    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

    cy.get("div[class='example'] p").should('have.contain',"Congratulations! You must have the proper credentials.")


    })


})