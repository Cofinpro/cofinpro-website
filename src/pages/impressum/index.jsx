import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import ExternalLinkButton from '../../components/buttons/ExternalLinkButton'

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
              property: 'og:title',
              content: 'Impressum - Cofinpro',
            },
            {
              property: 'Description',
              content:
                'Impressum Cofinpro AG Untermainkai 27 - 28 60329 Frankfurt am Main Tel +49 (0) 69-2 99 20 87 60 Fax…',
            },
            {
              property: 'og:description',
              content:
                'Impressum Cofinpro AG Untermainkai 27 - 28 60329 Frankfurt am Main Tel +49 (0) 69-2 99 20 87 60 Fax…',
            },
          ]}
        />

        <div className="container padding-md-top-bottom">
          <div className="row">
            <div className="col">
              <h1 className="h2 margin-md-bottom">Impressum</h1>

              <p>
                Cofinpro AG
                <br />Untermainkai 27 - 28
                <br />60329 Frankfurt am Main
                <br />Tel +49 (0) 69-2 99 20 87 60
                <br />Fax +49 (0) 69-2 99 20 87 61
                <br />welcome@cofinpro.de
              </p>

              <p>
                <strong>Sitz der Gesellschaft</strong>
                <br />Frankfurt
              </p>

              <p>
                <strong>Handelsregister</strong>
                <br />HRB 10 29 30
                <br />Amtsgericht Frankfurt am Main
              </p>

              <p>
                <strong>USt-ID</strong>
                <br />DE 814 878 661
              </p>

              <p>
                <strong>Vorsitzender des Aufsichtsrates</strong>
                <br />Markus Bohner
              </p>

              <p>
                <strong>Vorstand</strong>
                <br />Gerald Prior (Vorsitzender)
                <br />Christine Naber
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <ExternalLinkButton
                text="Datenschutz"
                _href="https://cofinpro.de/datenschutz/"
                _target="_blank"
                styleLink="margin-sm-right"
              />
              <ExternalLinkButton
                text="AGB/Disclaimer"
                _href="https://cofinpro.de/agb/"
                _target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Impressum
