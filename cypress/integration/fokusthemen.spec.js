describe('Seite - Fokusthemen', () => {
  const fokusthemen = [
    {
      key: 'Managementberatung',
      path: 'managementberatung',
      header: 'Managementberatung',
    },
    {
      key: 'Fachberatung Kredit',
      path: 'fachberatung-kredit',
      header: 'Kreditgeschäft',
    },
    {
      key: 'Fachberatung Wertpapier',
      path: 'fachberatung-wertpapier',
      header: 'Wertpapiergeschäft',
    },
    {
      key: 'Technologieberatung',
      path: 'technologieberatung',
      header: 'Technologieberatung',
    },
    {
      key: 'Digitalisierung',
      path: 'digitalisierung',
      header: 'Digitalisierung',
    },
  ]

  beforeEach(() => {
    cy.visit('/fokusthemen/managementberatung')
  })

  it('should open managementberatung as default for fokusthemen', () => {
    cy.location().should(location => {
      expect(location.pathname).to.eq('/fokusthemen/managementberatung')
    })

    cy.get('.beratungsfelder-text > .active').should('contain', 'Management')
  })

  it('should open a topic', () => {
    cy
      .get('.img-fluid')
      .first()
      .click({ force: true })
    cy.contains('Herausforderung')
    cy.contains('Lösungsansatz')
    cy.contains('Nutzen')
    cy.contains('Referenzprojekte')
    cy.contains('Medien')
  })

  describe('Beratungsfelder', () => {
    it('should have 5', () => {
      // no idea why they are rendered all the time twice
      cy
        .get('.beratungsfelder-text')
        .should('have.length', fokusthemen.length * 2)
    })

    fokusthemen.forEach(beratungsfeld => {
      describe(beratungsfeld.key, () => {
        beforeEach(() => {
          cy
            .get('.beratungsfelder-text')
            .contains(beratungsfeld.key)
            .click({ force: true })
        })

        it('should have the right url and selected href', () => {
          cy.location().should(location => {
            expect(location.pathname).to.eq(
              `/fokusthemen/${beratungsfeld.path}`
            )
          })

          cy.get('.h2').should('contain', beratungsfeld.header)
        })

        it('should have a header element', () => {
          cy
            .get('.beratungsfelder-text > .active')
            .should('contain', beratungsfeld.key)
        })

        it('should have multiple topics', () => {
          cy.get('.img-fluid').should('have.length.greaterThan', 2)
        })
      })
    })
  })
})
