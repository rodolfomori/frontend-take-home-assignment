context('Bolsas de estudos', () => {
  before(() => {
    cy.visit('http://localhost:1234');
  });
  describe('Login', () => {
    it('Should load with correct initial state', () => {
      cy.get('[data-testid="input"]').should('have.attr', 'value', '$25,000');
    });

    it('Should load with correct initial state', () => {
      cy.get('[data-testid="monthly-amount"]').should('have.text', '$521');
    });
  });
});
