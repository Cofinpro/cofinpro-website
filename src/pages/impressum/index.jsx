import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

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
          link={[{ rel: 'canonical', href: this.getCurrentUrl() }]}
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

        <div className="container padding-lg-top-bottom">
          <div className="row">
            <div className="col text-center">
              <h1 className="margin-md-bottom">Impressum</h1>

              <p>
                Cofinpro AG
                <br />Untermainkai 27 - 28
                <br />60329 Frankfurt am Main
                <br />Tel +49 (0) 69-2 99 20 87 60
                <br />Fax +49 (0) 69-2 99 20 87 61
                <br />welcome@cofinpro.de
              </p>

              <p>
                Sitz der Gesellschaft
                <br />Frankfurt
              </p>

              <p>
                Handelsregister
                <br />HRB 10 29 30
                <br />Amtsgericht Frankfurt am Main
              </p>

              <p>
                USt-ID
                <br />DE 814 878 661
              </p>

              <p>
                Vorsitzender des Aufsichtsrates
                <br />Markus Bohner
              </p>

              <p>
                Vorstand
                <br />Gerald Prior (Vorsitzender)
                <br />Christine Naber
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Impressum
