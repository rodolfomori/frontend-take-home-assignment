import { addMonths } from 'date-fns';

import { getMonthName } from '../../src/utils';

context('Home Buy a house', () => {
  before(() => {
    cy.visit('http://localhost:1234');
  });

  const date = new Date();
  const firtsPlanning = new Date(addMonths(date, 48));
  const month = getMonthName(firtsPlanning.getMonth());
  const year = firtsPlanning.getFullYear();
  describe('Initial State', () => {
    it('Should load with correct initial state', () => {
      cy.get('[data-testid="input-total-amount"]').should(
        'have.attr',
        'value',
        '25,000'
      );
      cy.get('[data-testid="monthly-amount"]').should('have.text', '$521');

      cy.get('[data-testid="final-date"]').should(
        'have.text',
        `${month} ${year}.`
      );
      cy.get('[data-testid="goal-value"]').should('have.text', '$25,000');
      cy.get('[data-testid="date-picker-mounth"]').should('have.text', month);
      cy.get('[data-testid="date-picker-year"]').should('have.text', year);
    });
  });

  describe('Calculate correct value when input change', () => {
    it('Should calculte correct value when type 25,000', () => {
      cy.get('[data-testid="input-total-amount"]').clear();
      cy.get('[data-testid="input-total-amount"]').type('25000');
      cy.get('[data-testid="monthly-amount"]').should('have.text', '$521');
      cy.get('[data-testid="final-date"]').should(
        'have.text',
        `${month} ${year}.`
      );
      cy.get('[data-testid="goal-value"]').should('have.text', '$25,000');
    });
    it('Should calculte correct value when type 30,000', () => {
      cy.get('[data-testid="input-total-amount"]').clear();
      cy.get('[data-testid="input-total-amount"]').type('30000');
      cy.get('[data-testid="monthly-amount"]').should('have.text', '$625');
      cy.get('[data-testid="goal-value"]').should('have.text', '$30,000');
    });
    it('Should calculte correct value when type 600,000', () => {
      cy.get('[data-testid="input-total-amount"]').clear();
      cy.get('[data-testid="input-total-amount"]').type('600000');
      cy.get('[data-testid="monthly-amount"]').should('have.text', '$12,500');
      cy.get('[data-testid="goal-value"]').should('have.text', '$600,000');
    });
  });

  describe('Calculate correct value when change goal date', () => {
    it('Should calculte correct value when decrese months', () => {
      cy.get('[data-testid="decrese-button"]').click();
      cy.get('[data-testid="monthly-amount"]').should('have.text', '$12,800');

      cy.get('[data-testid="goal-value"]').should('have.text', '$600,000');

      cy.get('[data-testid="decrese-button"]').dblclick();
      cy.get('[data-testid="monthly-amount"]').should('have.text', '$13,300');
    });

    it('Should calculte correct value when increase months', () => {
      cy.get('[data-testid="increase-button"]').dblclick();
      cy.get('[data-testid="monthly-amount"]').should('have.text', '$12,800');

      cy.get('[data-testid="increase-button"]').click();
      cy.get('[data-testid="monthly-amount"]').should('have.text', '$12,500');
    });
  });

  describe('Calculate correct value when change goal date with keyboard', () => {
    it('Should calculte correct value when decrese months typing left key', () => {
      cy.get('[data-testid="monthly-amount"]').trigger('keydown', {
        keyCode: 37,
        which: 37
      });
      cy.get('[data-testid="monthly-amount"]').should('have.text', '$12,800');
    });

    it('Should calculte correct value when increase months typing right key', () => {
      cy.get('[data-testid="monthly-amount"]').trigger('keydown', {
        keyCode: 39,
        which: 39
      });
      cy.get('[data-testid="monthly-amount"]').should('have.text', '$12,500');
    });
  });
});
