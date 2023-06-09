describe('template spec', () => {



  it('passes', () => {

    cy.visit('http://localhost:3000/');
    cy.get('.form-control').click();
    
    cy.get('html').click();
    cy.get('.btn').click();

  
    cy.get('#button-0').click();
   

    cy.get('h1').should('contain','You selected:');
    cy.get('h1').should('contain','1');

  })


})