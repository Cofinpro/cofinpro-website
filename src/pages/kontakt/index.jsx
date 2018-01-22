import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

class Kontakt extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div className="min-view-height">
        <Helmet
          title="Kontakt - Cofinpro"
          link={[{ rel: 'canonical', href: this.getCurrentUrl() }]}
          meta={[
            {
              property: 'og:title',
              content: 'Kontakt - Cofinpro',
            },
            {
              property: 'Description',
              content:
                'Sie haben Fragen zu unserem Unternehmen oder unseren Leistungen? Treten Sie mit uns in Kontakt!',
            },
            {
              property: 'og:description',
              content:
                'Sie haben Fragen zu unserem Unternehmen oder unseren Leistungen? Treten Sie mit uns in Kontakt!',
            },
          ]}
        />

        <div className="container padding-md-top-bottom">
          <div className="row">
            <div className="col">
              <h1 className="h2">Kontakt für Bewerber</h1>

              <p>
                Über unser Online-Bewerbungssystem hast du die Möglichkeit, Ihre
                vollständigen Bewerbungsunterlagen mit
              </p>

              <ul>
                <li>Anschreiben</li>
                <li>Lebenslauf</li>
                <li>Kopien aller relevanten Zeugnisse</li>
              </ul>

              <p>an uns weiterleiten</p>

              <a
                target="_blank"
                href="https://recruitingapp-2586.umantis.com/Vacancies/InitiativeApplication/1"
                className="btn btn-outline-primary"
              >
                INITIATIVBEWERBUNG ERFASSEN
              </a>

              <p className="padding-md-top">
                Fragen zum Bewerbungsprozess beantwortet Dir unser
                <br />Human Resources-Team unter
                <br />Tel + 49 (0) 69-2 99 20 87 60 und per E-Mail über
                <br />karriere@cofinpro.de
              </p>

              <Link to={pathPrefix + '/jobs'}>
                <span className="btn btn btn-outline-primary">ALLE JOBS</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Kontakt
