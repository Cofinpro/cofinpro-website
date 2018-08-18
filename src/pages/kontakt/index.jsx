import React from 'react'
import Helmet from 'react-helmet'

import ExternalLinkButton from '../../components/buttons/ExternalLinkButton'
import LinkButton from '../../components/buttons/LinkButton'

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
              name: 'Description',
              content:
                'Sie haben Fragen zu unserem Unternehmen oder unseren Leistungen? Treten Sie mit uns in Kontakt!',
            },
            {
              property: 'og:title',
              content: 'Kontakt - Cofinpro',
            },
            {
              property: 'og:description',
              content:
                'Sie haben Fragen zu unserem Unternehmen oder unseren Leistungen? Treten Sie mit uns in Kontakt!',
            },
          ]}
        />

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="h2">KONTAKT</h1>
              <p>Hier finden Sie uns: </p>

              <p>
                Cofinpro AG<br />
                Untermainkai 27 - 28<br />
                60329 Frankfurt am Main<br />
                Tel +49 (0) 69-2 99 20 87 60<br />
                Fax +49 (0) 69-2 99 20 87 61<br />
                Mail{' '}
                <a href="mailto:welcome@cofinpro.de">welcome@cofinpro.de</a>
              </p>
            </div>
          </div>
        </div>

        <div className="container padding-md-top-bottom">
          <div className="row">
            <div className="col-12 col-md-5">
              <h2 className="h2">Kontakt für Bewerber</h2>

              <p>
                Über unser Online-Bewerbungssystem hast du die Möglichkeit,
                Deine vollständigen Bewerbungsunterlagen mit
              </p>

              <ul>
                <li>Anschreiben</li>
                <li>Lebenslauf</li>
                <li>Kopien aller relevanten Zeugnisse</li>
              </ul>

              <p>an uns zu senden</p>

              <ExternalLinkButton
                text="INITIATIVBEWERBUNG ERFASSEN"
                _href="https://recruitingapp-2586.umantis.com/Vacancies/InitiativeApplication/1"
                _target="_blank"
              />

              <p className="padding-md-top">
                Fragen zum Bewerbungsprozess beantwortet Dir unser
                <br />Human Resources-Team unter
                <br />Tel + 49 (0) 69-2 99 20 87 60 und per E-Mail über
                <br />
                <a href="mailto:karriere@cofinpro.de">karriere@cofinpro.de</a>
              </p>

              <LinkButton text="ALLE JOBS" path="/karriere/jobs" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Kontakt
