import convert from 'xml-js'

var xml =
  '<?xml version="1.0" encoding="utf-8"?>' +
  '<note importance="high" logged="true">' +
  '    <title>Happy</title>' +
  '    <todo>Work</todo>' +
  '    <todo>Play</todo>' +
  '</note>'
var result1 = convert.xml2json(xml, {
  compact: true,
  spaces: 4,
})

console.log(result1)

/// <reference types="Cypress" />

context('Window', () => {
  it('cy.window() - get the global window object', () => {
    cy.readFile('/public/sitemap.xml').then(xml => {
      const json = JSON.parse(
        convert.xml2json(xml, {
          compact: true,
          spaces: 4,
        })
      )

      const urls = json.urlset.url.map(x => x.loc._text)

      console.log(urls)

      urls.forEach(url => {
        cy.visit(url, { failOnStatusCode: true })
      })
    })
  })
})
