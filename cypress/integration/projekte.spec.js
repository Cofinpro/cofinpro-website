describe('Seite - Projekte', () => {
  const beratungsfelder = [
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
    cy.visit('/projekte/managementberatung')
  })

  it('should open managementberatung as default for projekte', () => {
    cy.location().should(location => {
      expect(location.pathname).to.eq('/projekte/managementberatung')
    })

    cy.get('.beratungsfelder-text > .active').should('contain', 'Management')
  })

  it('should open a topic', () => {
    cy
      .get('.img-fluid')
      .first()
      .click({ force: true })
    cy.contains('Ziele')
    cy.contains('Aufgaben')
    cy.contains('Ergebnisse')
  })

  describe('Beratungsfelder', () => {
    it('should have 5', () => {
      // no idea why they are rendered all the time twice
      cy
        .get('.beratungsfelder-text')
        .should('have.length', beratungsfelder.length * 2)
    })

    beratungsfelder.forEach(beratungsfeld => {
      describe(beratungsfeld.key, () => {
        beforeEach(() => {
          cy
            .get('.beratungsfelder-text')
            .contains(beratungsfeld.key)
            .click({ force: true })
        })

        it('should have the right url and selected href', () => {
          cy.location().should(location => {
            expect(location.pathname).to.eq(`/projekte/${beratungsfeld.path}`)
          })

          cy.get('.h1').should('contain', beratungsfeld.header)
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
