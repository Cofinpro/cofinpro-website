import React from 'react'
import Helmet from 'react-helmet'

import LinkButton from '../../components/buttons/LinkButton'

class Impressum extends React.Component {
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
          title="Impressum - Cofinpro"
          link={[
            {
              rel: 'canonical',
              href: this.getCurrentUrl(),
            },
          ]}
          meta={[
            {
              name: 'Description',
              content:
                'Impressum Cofinpro AG Untermainkai 27 - 28 60329 Frankfurt am Main Tel +49 (0) 69-2 99 20 87 60 Fax…',
            },
            {
              property: 'og:title',
              content: 'Impressum - Cofinpro',
            },
            {
              property: 'og:description',
              content:
                'Impressum Cofinpro AG Untermainkai 27 - 28 60329 Frankfurt am Main Tel +49 (0) 69-2 99 20 87 60 Fax…',
            },
          ]}
        />

        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col">
              <h1 className="h1 margin-md-bottom">Impressum</h1>

              <p>
                Cofinpro AG
                <br />Untermainkai 27 - 28
                <br />60329 Frankfurt am Main
                <br />Tel +49 (0) 69-2 99 20 87 60
                <br />Fax +49 (0) 69-2 99 20 87 61
                <br />welcome@cofinpro.de
              </p>

              <p>
                <span className="bold-font">Sitz der Gesellschaft</span>
                <br />Frankfurt
              </p>

              <p>
                <span className="bold-font">Handelsregister</span>
                <br />HRB 10 29 30
                <br />Amtsgericht Frankfurt am Main
              </p>

              <p>
                <span className="bold-font">USt-ID</span>
                <br />DE 814 878 661
              </p>

              <p>
                <span className="bold-font">
                  Vorsitzender des Aufsichtsrates
                </span>
                <br />Markus Bohner
              </p>

              <p>
                <span className="bold-font">Vorstand</span>
                <br />Gerald Prior (Vorsitzender)
                <br />Christine Martin
              </p>
            </div>
          </div>
        </div>

        <div className="container margin-20-top">
          <div className="row">
            <div className="col">
              <LinkButton
                text="Datenschutz"
                path="/datenschutz"
                styleSpan="margin-sm-right"
              />
              <LinkButton text="AGB/Disclaimer" path="/agb" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Impressum
