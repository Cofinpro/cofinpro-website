import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import CarrerOffersCarousel from '../../components/CarrerOffersCarousel'
import SiteHeader from '../../components/SiteHeader'
import SiteHeaderContent from '../../components/SiteHeaderContent'
import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'
import CarrerOfferCarouselBox from '../../components/CarrerOfferCarouselBox'
import HtmlHeader from '../../components/HtmlHeader'
import ExternalLinkButton from '../../components/buttons/ExternalLinkButton'

import RichTextParserHelper from '../../utils/richTextParserHelper'
import StorageHelper from '../../utils/storageHelper'

import './style.scss'

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

        <div className="container margin-60-top">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <h2 className="h2 text-primary">
                Wir wünschen uns einfach Dich!
              </h2>
              <h1 className="h2">{stellenAnzeige.node.titel}</h1>
              <ContentfulMarkdownText
                styleClasses="margin-40-bottom"
                text={stellenAnzeige.node.absatzEins.absatzEins}
              />
            </div>
          </div>
        </div>

        <div className="container margin-40-bottom">
          <div className="row">
            <div className="col-4 col-md-2">
              <img
                src={pathPrefix + '/img/stellenanzeige/icon_1.jpg'}
                className="img-fluid padding-lg"
                alt="Icons Stellenangebot"
              />
            </div>
            <div className="col-4 col-md-2">
              <img
                src={pathPrefix + '/img/stellenanzeige/icon_2.jpg'}
                className="img-fluid padding-lg"
                alt="Icons Stellenangebot"
              />
            </div>
            <div className="col-4 col-md-2">
              <img
                src={pathPrefix + '/img/stellenanzeige/icon_3.jpg'}
                className="img-fluid padding-lg"
                alt="Icons Stellenangebot"
              />
            </div>
            <div className="col-4 col-md-2">
              <div className="margin-20-top b-block d-md-none" />
              <img
                src={pathPrefix + '/img/stellenanzeige/icon_4.jpg'}
                className="img-fluid padding-lg"
                alt="Icons Stellenangebot"
              />
            </div>
            <div className="col-4 col-md-2">
              <div className="margin-20-top b-block d-md-none" />
              <img
                src={pathPrefix + '/img/stellenanzeige/icon_5.jpg'}
                className="img-fluid padding-lg"
                alt="Icons Stellenangebot"
              />
            </div>
            <div className="col-4 col-md-2">
              <div className="margin-20-top b-block d-md-none" />
              <img
                src={pathPrefix + '/img/stellenanzeige/icon_6.jpg'}
                className="img-fluid padding-lg"
                alt="Icons Stellenangebot"
              />
            </div>
          </div>
        </div>

        <div className="container container-stellenanzeige-text">
          <div className="row">
            <div className="col-12 col-md-4">
              <h3 className="h4 margin-10-bottom">
                {stellenAnzeige.node.spaltenInfoTitelLinks}
              </h3>
              <ContentfulMarkdownText
                text={
                  stellenAnzeige.node.spaltenInfoBeschreibungLinksLang
                    .spaltenInfoBeschreibungLinksLang
                }
              />
              <div className="d-block d-md-none">
                <p className="margin-40-top" />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <h3 className="h4 margin-10-bottom">
                {stellenAnzeige.node.spaltenInfoTitelMitte}
              </h3>
              <ContentfulMarkdownText
                text={
                  stellenAnzeige.node.spaltenInfoBeschreibungMitte
                    .spaltenInfoBeschreibungMitte
                }
              />
              <div className="d-block d-md-none">
                <p className="margin-40-top" />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <h3 className="h4 margin-10-bottom">
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

        <div className="container bg-orange-light padding-md-top-bottom margin-100-top">
          <div className="row">
            <div className="col text-center">
              <div className="w-50 d-none d-lg-block mx-auto padding-sm-bottom stellenanzeige-call-to-action">
                <p className="h4 text-primary">
                  Wir passen zu Deiner Wunschliste?
                </p>
                <p className="p-small">
                  Dann bewirb Dich jetzt für Frankfurt, München, Berlin oder
                  einen von sechs weiteren deutschen Standorten unter
                  <Link className="readmore" to={pathPrefix + '/jobs'}>
                    <span> Jobs </span>
                  </Link>
                  oder karriere@cofinpro.de.
                </p>
                <p className="p-small">
                  Bei Fragen zu deiner Bewerbung hat Fabienne Daum (Tel. +49 (0)
                  69 / 2 99 20 87 60) ein offenes Ohr und unser Chatbot ein
                  offenes Fenster für dich.
                </p>
              </div>
              <div className="w-75 d-none d-md-block d-lg-none mx-auto padding-sm-bottom stellenanzeige-call-to-action">
                <p className="h4 text-primary">
                  Wir passen zu Deiner Wunschliste?
                </p>
                <p className="p-small">
                  Dann bewirb Dich jetzt für Frankfurt, München, Berlin oder
                  einen von sechs weiteren deutschen Standorten unter
                  <Link className="readmore" to={pathPrefix + '/jobs'}>
                    <span> Jobs </span>
                  </Link>
                  oder karriere@cofinpro.de.
                </p>
                <p className="p-small">
                  Bei Fragen zu deiner Bewerbung hat Fabienne Daum (Tel. +49 (0)
                  69 / 2 99 20 87 60) ein offenes Ohr und unser Chatbot ein
                  offenes Fenster für dich.
                </p>
              </div>
              <div className="w-100 d-block d-md-none mx-auto padding-sm-bottom">
                <p className="h4 text-primary">
                  Wir passen zu Deiner Wunschliste?
                </p>
                <p className="p-small">
                  Dann bewirb Dich jetzt für Frankfurt, München, Berlin oder
                  einen von sechs weiteren deutschen Standorten unter
                  <Link className="readmore" to={pathPrefix + '/jobs'}>
                    <span> Jobs </span>
                  </Link>
                  oder karriere@cofinpro.de.
                </p>
                <p className="p-small">
                  Bei Fragen zu deiner Bewerbung hat Fabienne Daum (Tel. +49 (0)
                  69 / 2 99 20 87 60) ein offenes Ohr und unser Chatbot ein
                  offenes Fenster für dich.
                </p>
              </div>
              <ExternalLinkButton
                text="JETZT BEWERBEN"
                _href={stellenAnzeige.node.uMantis.uMantis}
                _target="_blank"
              />
            </div>
          </div>
        </div>

        <div className="container margin-120-top">
          <CarrerOfferCarouselBox
            titel={'WEITERE JOBANZEIGEN'}
            stellenAnzeigen={stellenAnzeigen}
            buttonText={'ALLE JOBS'}
            blacklistedItem={stellenAnzeige.node.id}
            {...this.props}
          />
        </div>
      </div>
    )
  }
}

export default StellenanzeigeTemplate
