describe('Cómo manejar nuevas pestañas y nueva ventana con cypress', () => {

    describe('Example to demonstrate the handling of new browser windows in cypress', () => {

        it('Handling new Browser Tab', function () {
            cy.visit('https://the-internet.herokuapp.com/windows')
            cy.get('.example > a').invoke('removeAttr', 'target').click()
            cy.url()
                .should('include', '/windows/new')
            cy.get('h3')
                .should('have.text', 'New Window')
        })
    
        it('Handling new Browser Window', function () {
            cy.visit('https://alapanme.github.io/testing-cypress.html')
            cy.window().then((win) => {
                cy.stub(win, 'open').as('windowOpen')
              })
            cy.get('button').click()
            //cy.get('#open-window').click()
            cy.get('@windowOpen').should('be.calledWith', 'https://the-internet.herokuapp.com/')
            cy.visit('https://the-internet.herokuapp.com/')
            cy.get('h1')
              .should('have.text', 'Welcome to the-internet')
        })
        
    })
/*
    describe('window open', function () {
        it('opens a new window with page1', function () {
          // window.open is called on click
          // thus we can create method stub after the cy.visit
          // but before cy.click
          cy.visit('/index.html')
          cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen')
          })
      
          cy.get('#open-window').click()
          cy.get('@windowOpen').should('be.calledWith', 'page1.html')
        })
      })*/
    
})
/* cy.window().then((win) => {
               // cy.stub(win, 'open').as('windowOpen')
                //cy.stub(win, 'open', url => {
                  //  win.location.href = 'https://the-internet.herokuapp.com/';
               // }).as("popup")
            })
            cy.get('button').click()
            cy.get('#open-window').click()
          cy.get('@windowOpen').should('be.calledWith', 'https://the-internet.herokuapp.com/')*/