describe("Check All Links on the Internet Page", () => {
    it("Finds and checks all links", () => {
      
      cy.visit("https://the-internet.herokuapp.com/"); 
      cy.get('.heading').should('be.visible')
    
      
    
    } ) 
    })
