import React from 'react';
import { graphql } from 'gatsby';

import PageIntroText from 'components/PageIntroText';
import ReferenzAndDownload from 'components/ReferenzAndDownload';
import ThreeIconsWithLinks from 'components/layouts/ThreeIconsWithLinks';
import FokusThemenFachLayout from 'components/layouts/FokusThemenFachLayout';
import HtmlHeader from 'components/HtmlHeader';
import { ImageWrapper, SourceTyp } from 'components/images/ImageWrapper';
import Layout from 'components/Layout';

interface Props {
  location: any;
  data: any;
}

class ThemaDigitalisierung extends React.Component<Props> {
  render() {
    const videoUrl = 'https://www.youtube.com/watch?v=hZziK7DNUXM';

    const seoTitle = 'Unsere Themen in der Digitalisierung';
    const seoDescription =
      'Sämtliche unserer Leistungen sind auf führende Finanzdienstleister zugeschnitten. Nachdem zunächst die Modernisierung exemplarischer Geschäftsmodelle, der Aufbau von Innovationslaboren und die Digitalisierungsstrategie im Vordergrund stand, ist nun die Renovierung etablierter Vorgehensweisen, die Prozesskettenstraffung, der konsequente Transfer von Best Practices aus Keimzellen in Fachbereichen sowie die ganzheitliche Digitale Transformation ins Zentrum gerückt.';

    const fokusthema = this.props.data.allContentfulFokusthemaEinteilung.edges[0].node;
    const fokusthemen = fokusthema.map((x: any) => x.fokusthemenDigitalisierungsseite);

    return (
      <Layout {...this.props}>
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
                  <ImageWrapper sourceType={SourceTyp.Bootstrap} source={'/img/icons/fokusthema/digitalisierung-color.png'} />
                </div>
              </div>
              <h1 className="h1 margin-xs-20-top">Unsere Themen in der Digitalisierung</h1>
              <h2 className="h2 normal-font margin-20-top d-none d-md-block">Wo liegen unsere Stärken in der Digitalisierung?</h2>
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
                  <ImageWrapper sourceType={SourceTyp.Bootstrap} source={'/img/icons/fokusthema/digitalisierung-color.png'} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-md-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-9 col-lg-7">
              <h2 className="h2">Ganzheitlich muss es sein</h2>
              <p>
                Unsere Leistungen sind auf führende Finanzdienstleister zugeschnitten. Zunächst stand die Modernisierung exemplarischer
                Geschäftsmodelle, der Aufbau von Innovationslaboren und die Digitalisierungsstrategie im Vordergrund.{' '}
              </p>
              <p>
                Nun ist die Renovierung etablierter Vorgehensweisen, die Prozesskettenstraffung, der konsequente Transfer von Best Practices
                aus Keimzellen in Fachbereichen sowie die ganzheitliche Digitale Transformation ins Zentrum gerückt. Bei der Umsetzung
                dieser herausfordernden Agenda unterstützen wir Finanzinstitute mit einem fokussierten Beratungsangebot quer über unsere
                Beratungsfelder.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 offset-lg-1 col-lg-10 d-none d-md-block">
              <ImageWrapper
                sourceType={SourceTyp.Sharp}
                source={this.props.data.ueberblickDigitalisierungDesktopSharp}
                styleClasses="margin-40-top"
              />
            </div>
            <div className="col-12 d-block d-md-none">
              <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.ueberblickDigitalisierungMobileSharp} />
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1 margin-xs-20-top">
              <h2 className="h2">So geht Digitale Transformation</h2>
              <p>
                Insiderwissen gefällig? Wir haben die erste B2B-Studien zur Digitalen Transformation in der Finanzindustrie veröffentlicht,
                und die Ergebnisse sind, gelinde gesagt, überraschend. Was genau kam heraus, wo lauern Gefahren und wo funkeln Chancen?
                Unser Vorstand Gerald Prior erläutert, bewertet und ordnet ein.
              </p>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="" src={videoUrl.replace('/watch?v=', '/embed/')} allowFullScreen />
              </div>
            </div>
          </div>
        </div>

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
      </Layout>
    );
  }
}

export default ThemaDigitalisierung;

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
    ueberblickDigitalisierungDesktopSharp: imageSharp(id: { regex: "/Digitalisierung-Uebersicht-Desktop/" }) {
      fluid(quality: 80, maxWidth: 1800) {
        ...GatsbyImageSharpFluid
      }
    }
    ueberblickDigitalisierungMobileSharp: imageSharp(id: { regex: "/Digitalisierung-Uebersicht-Mobile/" }) {
      fluid(quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
    iconThemeOneSharp: imageSharp(id: { regex: "/machinelearning-color/" }) {
      fluid(quality: 70) {
        ...GatsbyImageSharpFluid
      }
    }
    iconThemeTwoSharp: imageSharp(id: { regex: "/unbundlingbanks-color/" }) {
      fluid(quality: 70) {
        ...GatsbyImageSharpFluid
      }
    }
    iconThemeThreeSharp: imageSharp(id: { regex: "/blockchain-color/" }) {
      fluid(quality: 70) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
