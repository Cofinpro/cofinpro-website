/// <reference types="Cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000')
  })

  it('cy.window() - get the global window object', () => {
    // https://on.cypress.io/window
    cy.location().should(location => {
      expect(location.pathname).to.eq('/')
    })
  })

  it('cy.window() - get the global window object', () => {
    // https://on.cypress.io/window
    cy.location().should(location => {
      expect(location.pathname).to.eq('/')
    })

    cy.get('#button-mehr-ueber-uns').click()

    cy.location().should(location => {
      expect(location.pathname).to.eq('/cofinpro')
    })
  })
})
