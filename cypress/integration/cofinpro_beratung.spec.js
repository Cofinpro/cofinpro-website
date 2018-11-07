/// <reference types="Cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('/beratungsfelder')
  })

  it('cy.window() - get the global window object', () => {
    // https://on.cypress.io/window
    cy.location().should(location => {
      expect(location.pathname).to.eq('/beratungsfelder')
    })

    cy.get('#button-zur-managementberatung').click()

    cy.location().should(location => {
      expect(location.pathname).to.eq('/beratungsfelder/management')
    })
  })
})
