import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import CarrerOffersCarousel from '../components/CarrerOffersCarousel'
import SiteHeader from '../components/SiteHeader'
import SiteHeaderContent from '../components/SiteHeaderContent'
import ContentfulMarkdownText from '../components/ContentfulMarkdownText'
import CarrerOfferCarouselBox from '../components/CarrerOfferCarouselBox'
import HtmlHeader from '../components/HtmlHeader'

import RichTextParserHelper from '../utils/richTextParserHelper'
import StorageHelper from '../utils/storageHelper'

class StellenanzeigeTemplate extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const { location } = this.props

    const stellenAnzeige = this.props.pathContext.stellenAnzeige
    const stellenAnzeigen = this.props.pathContext.stellenAnzeigen

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <HtmlHeader
          dataFromCms={stellenAnzeige.node.metaData}
          {...this.props}
        />

        <SiteHeader
          title={stellenAnzeige.node.ueberschriftGanzOben}
          imageFile={stellenAnzeige.node.bildStellenanzeige}
          imageSmall={stellenAnzeige.node.bildStellenanzeige}
        />

        <div className="container padding-md-top-bottom">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <h2 className="h3 text-primary">
                Wir wünschen uns einfach Dich!
              </h2>
              <h1 className="h2">{stellenAnzeige.node.titel}</h1>
              <ContentfulMarkdownText
                text={stellenAnzeige.node.absatzEins.absatzEins}
              />
            </div>
          </div>
        </div>

        <div className="container padding-md-bottom">
          <div className="row d-none d-md-block">
            <div className="col">
              <img
                src={pathPrefix + '/img/stellenangebot_icons.png'}
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row d-block d-md-none">
            <div className="col-12 text-center padding-md-bottom">
              <img
                src={pathPrefix + '/img/Group_5.png'}
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="container container-stellenanzeige-text">
          <div className="row">
            <div className="col-12 col-md-4 padding-md-bottom">
              <h3 className="h4 padding-sm-bottom">
                {stellenAnzeige.node.spaltenInfoTitelLinks}
              </h3>
              <ContentfulMarkdownText
                text={
                  stellenAnzeige.node.spaltenInfoBeschreibungLinksLang
                    .spaltenInfoBeschreibungLinksLang
                }
              />
            </div>
            <div className="col-12 col-md-4 padding-md-bottom">
              <h3 className="h4 padding-sm-bottom">
                {stellenAnzeige.node.spaltenInfoTitelMitte}
              </h3>
              <ContentfulMarkdownText
                text={
                  stellenAnzeige.node.spaltenInfoBeschreibungMitte
                    .spaltenInfoBeschreibungMitte
                }
              />
            </div>
            <div className="col-12 col-md-4 padding-md-bottom">
              <h3 className="h4 padding-sm-bottom">
                {stellenAnzeige.node.spaltenInfoTitelRechts}
              </h3>
              <ContentfulMarkdownText
                text={
                  stellenAnzeige.node.spaltenInfoBeschreibungRechts
                    .spaltenInfoBeschreibungRechts
                }
              />
            </div>
          </div>
        </div>

        <div className="container bg-orange-light padding-lg-top-bottom margin-lg-top-bottom">
          <div className="row">
            <div className="col text-center">
              <p className="h5 w-75 d-none d-md-block mx-auto padding-sm-bottom">
                <span className="text-primary">
                  Wir passen zu Deiner Wunschliste?
                </span>{' '}
                <br />
                <br />Dann bewirb Dich jetzt für Frankfurt, München, Berlin oder
                einen von sechs weiteren deutschen Standorten unter
                <Link className="readmore" to={pathPrefix + '/jobs'}>
                  <span> Jobs </span>
                </Link>
                oder karriere@cofinpro.de. <br /> <br />Bei Fragen zu Deiner
                Bewerbung hat Fabienne Daum (Tel. +49 (0) 69 / 2 99 20 87 60)
                ein offenes Ohr und unser Chatbot ein offenes Fenster für Dich.
              </p>
              <p className="h5  w-100 d-block d-md-none mx-auto padding-sm-bottom">
                Dann bewirb Dich jetzt für Frankfurt, München, Berlin oder einen
                von sechs weiteren deutschen Standorten unter
                <Link className="readmore" to={pathPrefix + '/jobs'}>
                  <span> Jobs </span>
                </Link>
                oder karriere@cofinpro.de. <br /> <br />{' '}
                <span className="text-primary">
                  Wir passen zu Deiner Wunschliste?
                </span>{' '}
                <br /> <br />Bei Fragen zu deiner Bewerbung hat Fabienne Daum
                (Tel. +49 (0) 69 / 2 99 20 87 60) ein offenes Ohr und unser
                Chatbot ein offenes Fenster für dich.
              </p>
              <a href={stellenAnzeige.node.uMantis.uMantis} target="_blank">
                <span className="btn btn btn-outline-primary">
                  JETZT BEWERBEN
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="container padding-lg-top-bottom margin-lg-top-bottom">
          <CarrerOfferCarouselBox
            titel={'WEITERE JOBANZEIGEN'}
            stellenAnzeigen={stellenAnzeigen}
            buttonText={'MEHR JOBS ANZEIGEN'}
            blacklistedItem={stellenAnzeige.node.id}
            {...this.props}
          />
        </div>
      </div>
    )
  }
}

export default StellenanzeigeTemplate
