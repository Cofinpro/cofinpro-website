import React from 'react'
import Helmet from 'react-helmet'

import ExternalLinkButton from '../../components/buttons/ExternalLinkButton'
import LinkButton from '../../components/buttons/LinkButton'

import {
  ImageWrapper,
  SOURCE_TYP_BOOTSTRAP,
} from '../../components/images/ImageWrapper'

class Standorte extends React.Component {
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
          title="Standorte - Cofinpro"
          link={[{ rel: 'canonical', href: this.getCurrentUrl() }]}
          meta={[
            {
              name: 'Description',
              content:
                'Standorte Frankfurt Cofinpro AG Untermainkai 27 - 28 60329 Frankfurt am Main Tel +49 (0) 69-2 99 20 87 60',
            },
            {
              property: 'og:title',
              content: 'Standorte - Cofinpro',
            },
            {
              property: 'og:description',
              content:
                'Standorte Frankfurt Cofinpro AG Untermainkai 27 - 28 60329 Frankfurt am Main Tel +49 (0) 69-2 99 20 87 60',
            },
          ]}
        />

        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col-12">
              <h1 className="h2">STANDORTE</h1>
            </div>
          </div>
          <div className="row margin-40-top">
            <div className="col-12">
              <p className="h4">Frankfurt</p>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <a
                href="https://goo.gl/maps/eMTlX"
                target="_blank"
                rel="noopener"
              >
                <ImageWrapper
                  sourceType={SOURCE_TYP_BOOTSTRAP}
                  source={'/img/standorte/anfahrt-frankfurt.png'}
                />
              </a>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <p className="margin-xs-20-top">
                Cofinpro AG<br />
                Untermainkai 27 - 28<br />
                60329 Frankfurt am Main<br />
                Tel +49 (0) 69-2 99 20 87 60<br />
                Fax +49 (0) 69-2 99 20 87 61
              </p>
              <p>Anfahrtsskizze</p>
            </div>
          </div>
          <div className="row margin-40-top">
            <div className="col-12">
              <p className="h4">Karlsruhe</p>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <a
                href="https://goo.gl/maps/tFLaCK6MhBJ2"
                target="_blank"
                rel="noopener"
              >
                <ImageWrapper
                  sourceType={SOURCE_TYP_BOOTSTRAP}
                  source={'/img/standorte/anfahrt-karlsruhe.png'}
                />
              </a>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <p className="margin-xs-20-top">
                Cofinpro AG<br />
                Ludwig-Erhard-Allee 10<br />
                76131 Karlsruhe<br />
                Tel +49 (0) 721-50 99 87 31<br />
                Fax +49 (0) 69-2 99 20 87 61<br />
              </p>
              <p>Anfahrtsskizze</p>
            </div>
          </div>
          <div className="row margin-40-top">
            <div className="col-12">
              <p className="h4">Berlin</p>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <a
                href="https://goo.gl/maps/JKE9rzt5jxN2"
                target="_blank"
                rel="noopener"
              >
                <ImageWrapper
                  sourceType={SOURCE_TYP_BOOTSTRAP}
                  source={'/img/standorte/anfahrt-berlin-charlottenstr.png'}
                />
              </a>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <p className="margin-xs-20-top">
                Cofinpro AG<br />
                Charlottenstraße 24<br />
                10117 Berlin<br />
                Tel +49 (0) 30-27 57 99 33<br />
                Fax +49 (0) 69-2 99 20 87 61<br />
              </p>
              <p>Anfahrtsskizze</p>
            </div>
          </div>
          <div className="row margin-40-top">
            <div className="col-12">
              <p className="h4">München</p>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <a
                href="https://goo.gl/maps/8qdsmKG6ou12"
                target="_blank"
                rel="noopener"
              >
                <ImageWrapper
                  sourceType={SOURCE_TYP_BOOTSTRAP}
                  source={'/img/standorte/anfahrt-muenchen-landsberger.png'}
                />
              </a>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <p className="margin-xs-20-top">
                Cofinpro AG<br />
                Landsberger Straße 155<br />
                80687 München<br />
                Tel +49 (0) 89-57 95 90<br />
                Fax +49 (0) 89-57 95 92 00<br />
              </p>
              <p>Anfahrtsskizze</p>
            </div>
          </div>
          <div className="row margin-40-top">
            <div className="col-12">
              <p className="h4">Hamburg</p>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <a
                href="https://goo.gl/maps/kCP6Wi3Xzs52"
                target="_blank"
                rel="noopener"
              >
                <ImageWrapper
                  sourceType={SOURCE_TYP_BOOTSTRAP}
                  source={'/img/standorte/anfahrt-hamburg-neuer-wall.png'}
                />
              </a>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <p className="margin-xs-20-top">
                Cofinpro AG<br />
                Neuer Wall 63<br />
                20354 Hamburg<br />
              </p>
            </div>
          </div>
          <div className="row margin-40-top">
            <div className="col-12">
              <p className="h4">Hannover</p>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <a
                href="https://goo.gl/maps/g1KofaSq5Hw"
                target="_blank"
                rel="noopener"
              >
                <ImageWrapper
                  sourceType={SOURCE_TYP_BOOTSTRAP}
                  source={'/img/standorte/anfahrt-hamburg-neuer-wall.png'}
                />
              </a>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <p className="margin-xs-20-top">
                Cofinpro AG<br />
                Bahnhofstraße 8<br />
                30159 Hannover<br />
              </p>
            </div>
          </div>
          <div className="row margin-40-top">
            <div className="col-12">
              <p className="h4">Dresden</p>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <a
                href="https://goo.gl/maps/FsjYziDuuHM2"
                target="_blank"
                rel="noopener"
              >
                <ImageWrapper
                  sourceType={SOURCE_TYP_BOOTSTRAP}
                  source={'/img/standorte/anfahrt-dresden-altmarkt.png'}
                />
              </a>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <p className="margin-xs-20-top">
                Cofinpro AG<br />
                Altmarkt 10D<br />
                01067 Dresden<br />
              </p>
            </div>
          </div>
          <div className="row margin-40-top">
            <div className="col-12">
              <p className="h4">Köln</p>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <a
                href="https://goo.gl/maps/h5v5ZvSux8u"
                target="_blank"
                rel="noopener"
              >
                <ImageWrapper
                  sourceType={SOURCE_TYP_BOOTSTRAP}
                  source={'/img/standorte/anfahrt-koeln-im-mediapark.png'}
                />
              </a>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <p className="margin-xs-20-top">
                Cofinpro AG<br />
                Im Mediapark 8<br />
                50670 Köln<br />
              </p>
            </div>
          </div>
          <div className="row margin-40-top">
            <div className="col-12">
              <p className="h4">Stuttgart</p>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <a
                href="https://goo.gl/maps/XWEjKzn3egr"
                target="_blank"
                rel="noopener"
              >
                <ImageWrapper
                  sourceType={SOURCE_TYP_BOOTSTRAP}
                  source={'/img/standorte/anfahrt-stuttgart-koenigstr.png'}
                />
              </a>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <p className="margin-xs-20-top">
                Cofinpro AG<br />
                Königstraße 10c<br />
                70173 Stuttgart<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Standorte
