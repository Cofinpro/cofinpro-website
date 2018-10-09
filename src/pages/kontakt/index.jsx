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

        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col-12">
              <h1 className="h3">Kontakt</h1>
              <p>
                Cofinpro AG<br />
                Untermainkai 27 - 28<br />
                60329 Frankfurt am Main<br />
                Tel +49 (0) 69 - 299 20 87 60<br />
                Fax +49 (0) 69 - 299 20 87 61<br />
                <a href="mailto:welcome@cofinpro.de">welcome@cofinpro.de</a>
              </p>
            </div>
          </div>
        </div>

        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col-12">
              <h1 className="h3">Pressekontakt</h1>
              <p>
                Cofinpro AG<br />
                Fanina Karabelnik<br />
                Unternehmenskommunikation<br />
                +49 (0) 69 - 299 20 87 60<br />
                <a href="mailto:Marketing@cofinpro.de">Marketing@cofinpro.de</a>
              </p>
              <p>
                Thöring & Stuhr Kommunikationsberatung<br />
                Claudia Thöring<br />
                +49 (0) 40 -2 07 69 69 82<br />
                <a href="mailto:Claudia.Thoering@corpnewsmedia.de">
                  Claudia.Thoering@corpnewsmedia.de
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col-12">
              <h1 className="h3">Kontakt für Bewerber</h1>
              <p>
                Cofinpro AG<br />
                Recruiting<br />
                60329 Frankfurt am Main<br />
                +49 (0) 69 - 299 20 87 60<br />
                <a href="mailto:karriere@cofinpro.de">karriere@cofinpro.de</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Kontakt
