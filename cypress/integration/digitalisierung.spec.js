describe('Seite - Digitalisierung', () => {
  beforeEach(() => {
    cy.visit('/digitalisierung')
  })

  it('should have a header', () => {
    cy.get('.h1').should('contain', 'Digitalisierung')
  })

  const directLinks = [
    { key: 'Machine Learning' },
    { key: 'Unbundling Banks' },
    { key: 'Blockchain' },
  ]

  directLinks.forEach(link => {
    it(`should have direct link to ${link.key}`, () => {
      cy
        .get('a')
        .contains(link.key)
        .click()
      cy.contains('Herausforderung')
      cy.contains('Lösungsansatz')
      cy.contains('Nutzen')
      cy.contains('Referenzprojekte')
      cy.contains('Medien')
    })
  })

  it('should have multiple topics', () => {
    cy.get('.icon-image')
  })

  it('should open a topic', () => {
    cy
      .get('.icon-image')
      .first()
      .click({ force: true })
    cy.contains('Herausforderung')
    cy.contains('Lösungsansatz')
    cy.contains('Nutzen')
    cy.contains('Referenzprojekte')
    cy.contains('Medien')
  })

  it('should have media links', () => {
    cy.contains('Referenzprojekte')
    cy.contains('Medien')
  })
})
