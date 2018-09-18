import React from 'react'

import PageIntroText from '../../components/text/PageIntroText'

import ReferenzAndDownload from '../../components/ReferenzAndDownload'
import ThreeIconsWithLinks from '../../components/layouts/ThreeIconsWithLinks'
import FokusThemenFachLayout from '../../components/layouts/FokusThemenFachLayout'

import HtmlHeader from '../../components/HtmlHeader'

import {
  ImageWrapper,
  SOURCE_TYP_BOOTSTRAP,
  SOURCE_TYP_SHARP,
} from '../../components/images/ImageWrapper'

class ThemaDigitalisierung extends React.Component {
  render() {
    let videoUrl = 'https://www.youtube.com/watch?v=hZziK7DNUXM'

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    let seoTitle = 'Unsere Themen in der Digitalisierung'
    let seoDescription =
      'Sämtliche unserer Leistungen sind auf führende Finanzdienstleister zugeschnitten. Nachdem zunächst die Modernisierung exemplarischer Geschäftsmodelle, der Aufbau von Innovationslaboren und die Digitalisierungsstrategie im Vordergrund stand, ist nun die Renovierung etablierter Vorgehensweisen, die Prozesskettenstraffung, der konsequente Transfer von Best Practices aus Keimzellen in Fachbereichen sowie die ganzheitliche Digitale Transformation ins Zentrum gerückt.'

    var fokusthemen = []

    let fokusthema = this.props.data.allContentfulFokusthemaEinteilung.edges[0]
      .node

    for (
      let i = 0;
      i < fokusthema.fokusthemenDigitalisierungsseite.length;
      ++i
    ) {
      fokusthemen.push(fokusthema.fokusthemenDigitalisierungsseite[i])
    }

    let relevantFocusFields = []

    for (
      let i = 0;
      i < fokusthema.fokusthemenDigitalisierungsseite.length;
      ++i
    ) {
      relevantFocusFields.push({
        title:
          fokusthema.fokusthemenDigitalisierungsseite[i].uberschriftGanzOben,
        url:
          '/fokusthemen/thema/' +
          fokusthema.fokusthemenDigitalisierungsseite[i].url,
      })
    }

    return (
      <div>
        <HtmlHeader
          direktData={{
            title: seoTitle,
            description: seoDescription,
          }}
        />

        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-7">
              <div className="row d-flex d-md-none">
                <div className="col-3 col-lg-2">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_BOOTSTRAP}
                    source={'/img/icons/fokusthema/digitalisierung-color.png'}
                  />
                </div>
              </div>
              <h1 className="h1 margin-xs-20-top">
                Unsere Themen in der Digitalisierung
              </h1>
              <h2 className="h2 normal-font margin-20-top d-none d-md-block">
                Wo liegen unsere Stärken in der Digitalisierung?
              </h2>
              <PageIntroText
                content={{
                  text:
                    'Sämtliche unserer Leistungen sind auf führende Finanzdienstleister zugeschnitten. Nachdem zunächst die Modernisierung exemplarischer Geschäftsmodelle, der Aufbau von Innovationslaboren und die Digitalisierungsstrategie im Vordergrund stand, sind nun die Renovierung etablierter Vorgehensweisen, die Prozesskettenstraffung, der konsequente Transfer von Best Practices aus Keimzellen in Fachbereichen sowie die ganzheitliche Digitale Transformation ins Zentrum gerückt. Bei der Umsetzung dieser Agenda unterstützen wir Finanzinstitute mit einem fokussierten Angebot auf mehreren Beratungsfeldern.',
                }}
              />
            </div>
            <div className="col-12 col-md-1 d-block d-lg-none" />
            <div className="col-12 col-md-3 col-lg-5">
              <div className="row d-none d-md-flex justify-content-end">
                <div className="col-12 col-md-12 col-lg-6">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_BOOTSTRAP}
                    source={'/img/icons/fokusthema/digitalisierung-color.png'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-md-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-9 col-lg-7">
              <h2 className="h2">
                Wo liegen unsere Stärken in der Digitalisierung?
              </h2>
              <p>
                Unsere Leistungen sind auf führende Finanzdienstleister
                zugeschnitten. Zunächst stand die Modernisierung exemplarischer
                Geschäftsmodelle, der Aufbau von Innovationslaboren und die
                Digitalisierungsstrategie im Vordergrund.{' '}
              </p>
              <p>
                Nun ist die Renovierung etablierter Vorgehensweisen, die
                Prozesskettenstraffung, der konsequente Transfer von Best
                Practices aus Keimzellen in Fachbereichen sowie die
                ganzheitliche Digitale Transformation ins Zentrum gerückt. Bei
                der Umsetzung dieser herausfordernden Agenda unterstützen wir
                Finanzinstitute mit einem fokussierten Beratungsangebot quer
                über unsere Beratungsfelder.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 offset-lg-1 col-lg-10 d-none d-md-block">
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.ueberblickDigitalisierungDesktopSharp}
                styleClasses="margin-40-top"
              />
            </div>
            <div className="col-12 d-block d-md-none">
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.ueberblickDigitalisierungMobileSharp}
              />
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1 margin-xs-20-top">
              <h2 className="h2">Digitale Transformation bei Cofinpro</h2>
              <p>
                Was bedeutet die Digitale Transformation für Finanzdiensleister?
                Die richtigen Weichen zu stellen.
              </p>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className=""
                  src={videoUrl.replace('/watch?v=', '/embed/')}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-md-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
              <h2 className="h2">Trends sind unser Ding</h2>
              <p>
                Wir unterstützen unsere Kunden in ihrem Ziel,
                Digitalisierungsstrategien zu entwickeln, und begleiten sie auf
                ihrem Weg zur agilen Organisation. Themen, mit denen wir uns im
                Kontext der Digitalisierung aktuell beschäftigen, sind etwa
                digitale Transformation, Machine Learning, Unbundling Banks und
                Blockchain.
              </p>
            </div>
          </div>
        </div>

        <ThreeIconsWithLinks
          styleClass="margin-40-top"
          iconLeft={this.props.data.iconThemeOneSharp}
          titleLeft="Machine Learning"
          linkLeft={'/fokusthemen/thema/machine-learning'}
          iconMiddle={this.props.data.iconThemeTwoSharp}
          titleMiddle="Unbundling Banks"
          linkMiddle={'/fokusthemen/thema/unbundling-banks'}
          iconRight={this.props.data.iconThemeThreeSharp}
          titleRight="Blockchain"
          linkRight={'/fokusthemen/thema/blockchain'}
        />

        <FokusThemenFachLayout
          style={{
            container: 'margin-120-top margin-xs-80-top',
            textCol: '',
          }}
          text={'Unsere Themen rund um die Digitalisierung:'}
          fokusthemen={fokusthemen}
        />

        <ReferenzAndDownload
          style={{ container: 'margin-120-top margin-xs-80-top' }}
          content={{
            right: {
              header: 'Referenzprojekte',
              description:
                'Welche Projekte haben wir im Kontext Digitalisierung schon gemeistert und welches Kundenziel stand dahinter? Welche Schritte waren notwendig, welchen Mehrwert konnten wir leisten und welchen Nutzen haben wir bewirkt? In diesem Überblick erfahren Sie es.',
              button: {
                text: 'ZU DEN REFERENZEN',
                path: '/projekte/digitalisierung',
              },
            },
            left: {
              header: 'Medien',
              description:
                'Wissen soll nicht ungeteilt bleiben. Unsere Einschätzungen zu spannenden Fragen für Fachmedien aufzuschreiben oder als Pressemeldungen kundzutun, das lassen wir uns nicht nehmen. Sämtliche Veröffentlichungen zum Thema Digitalisierung finden Sie hier.',
              button: {
                text: 'ZU DEN PUBLIKATIONEN',
                path: '/news-medien/digitalisierung',
              },
            },
          }}
        />
      </div>
    )
  }
}

export default ThemaDigitalisierung

export const pageQuery = graphql`
  query digitalisierungQuery {
    allContentfulFokusthemaEinteilung {
      edges {
        node {
          fokusthemenDigitalisierungsseite {
            id
            url
            uberschriftGanzOben
            unterueberschrift
            icon
            relevanteBeratungsfelder
            headline {
              headline
            }
          }
        }
      }
    }
    ueberblickDigitalisierungDesktopSharp: imageSharp(
      id: { regex: "/Digitalisierung-Uebersicht-Desktop/" }
    ) {
      sizes(quality: 80, maxWidth: 1800) {
        ...GatsbyImageSharpSizes
      }
    }
    ueberblickDigitalisierungMobileSharp: imageSharp(
      id: { regex: "/Digitalisierung-Uebersicht-Mobile/" }
    ) {
      sizes(quality: 80) {
        ...GatsbyImageSharpSizes
      }
    }
    iconThemeOneSharp: imageSharp(id: { regex: "/machinelearning-color/" }) {
      sizes(quality: 70) {
        ...GatsbyImageSharpSizes
      }
    }
    iconThemeTwoSharp: imageSharp(id: { regex: "/unbundlingbanks-color/" }) {
      sizes(quality: 70) {
        ...GatsbyImageSharpSizes
      }
    }
    iconThemeThreeSharp: imageSharp(id: { regex: "/blockchain-color/" }) {
      sizes(quality: 70) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
