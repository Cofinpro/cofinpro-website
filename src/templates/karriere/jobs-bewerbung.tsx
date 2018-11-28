import React from 'react';
import ReactGA from 'react-ga';

import CarrerOfferCarouselBox from 'components/CarrerOfferCarouselBox';
import SiteHeaderContent from 'components/SiteHeaderContent';

import SubtitleTitelImageTextLayout from 'components/layouts/SubtitleTitelImageTextLayout';
import HeroImageLayout from 'components/layouts/HeroImageLayout';
import FourStepsLayout from 'components/layouts/FourStepsLayout';
import SubtitleTitelTwoImagesTextLayout from 'components/layouts/SubtitleTitelTwoImagesTextLayout';

import ContentfulMarkdownText from 'components/ContentfulMarkdownText';
import HtmlHeader from 'components/HtmlHeader';
import LinkButton from 'components/buttons/LinkButton';
import ExternalLinkButton from 'components/buttons/ExternalLinkButton';

import './jobs-bewerbung.scss';

interface Props {
  data: any;
}

class JobsBewerbungTemplate extends React.Component<Props> {
  render() {
    const graphQlResult = this.props.data.contentfulSeiteJobsBewerbung;
    const stellenAnzeigen = this.props.data.allContentfulSeiteStellenanzeige.edges;

    function handleApplyNowClick() {
      ReactGA.event({
        category: 'Application',
        action: 'Submit an application',
        label: 'User wants to apply initiative.',
      });
    }

    return (
      <div>
        <HtmlHeader dataFromCms={graphQlResult.metaData} {...this.props} />

        <HeroImageLayout
          title={graphQlResult.hauptueberschrift}
          titleImage={this.props.data.imageTitelBildSharp}
          titleImageSmall={this.props.data.imageTitelBildKleinSharp}
        />

        <SiteHeaderContent
          title={graphQlResult.beschreibungTitel}
          subtitle={graphQlResult.beschreibungUntertitel}
          text1={graphQlResult.beschreibungAbsatz1.beschreibungAbsatz1}
          text2={graphQlResult.beschreibungAbsatz2.beschreibungAbsatz2}
        />

        <div className="container margin-80-top">
          <CarrerOfferCarouselBox
            titel={graphQlResult.ueberschriftStellenanzeigen}
            stellenAnzeigen={stellenAnzeigen}
            buttonText={'ALLE JOBS'}
            {...this.props}
          />
        </div>

        <SubtitleTitelImageTextLayout
          content={{
            subtitle: graphQlResult.gptw.untertitel,
            title: graphQlResult.gptw.titel,
            image: this.props.data.gptwSharp,
            text: graphQlResult.gptw.beschreibung.beschreibung,
          }}
          style={{
            container: 'margin-120-top',
            rowOne: 'justify-content-end',
            rowTwo: 'justify-content-end margin-20-top',
          }}
        />

        <SubtitleTitelTwoImagesTextLayout
          content={{
            title: graphQlResult.ueberschriftAnsprechpartnerBewerbungen,
            imageLeft: this.props.data.ansprechpartnerEinsBildSharp,
            imageRight: this.props.data.ansprechpartnerZweiBildSharp,
            text: graphQlResult.beschreibungAnsprechpartnerBewerbungen.beschreibungAnsprechpartnerBewerbungen,
          }}
          style={{
            container: 'margin-80-top',
          }}
        />

        <FourStepsLayout
          subtitle={graphQlResult.bewerbungsprozessUntertitel}
          title={graphQlResult.bewerbungsprozessTitel}
          stepOneTitle={graphQlResult.bewerbungsprozessSchritt1Titel}
          stepOneImage={graphQlResult.bewerbungsprozessSchritt1Bild}
          stepOneText={graphQlResult.bewerbungsprozessSchritt1Beschreibung.bewerbungsprozessSchritt1Beschreibung}
          stepTwoTitle={graphQlResult.bewerbungsprozessSchritt2Titel}
          stepTwoImage={graphQlResult.bewerbungsprozessSchritt2Bild}
          stepTwoText={graphQlResult.bewerbungsprozessSchritt2Beschreibung.bewerbungsprozessSchritt2Beschreibung}
          stepThreeTitle={graphQlResult.bewerbungsprozessSchritt3Titel}
          stepThreeImage={graphQlResult.bewerbungsprozessSchritt3Bild}
          stepThreeText={graphQlResult.bewerbungsprozessSchritt3Beschreibung.bewerbungsprozessSchritt3Beschreibung}
          stepFourTitle={graphQlResult.bewerbungsprozessSchritt4Titel}
          stepFourImage={graphQlResult.bewerbungsprozessSchritt4Bild}
          stepFourText={graphQlResult.bewerbungsprozessSchritt4Beschreibung.bewerbungsprozessSchritt4Beschreibung}
          containerStyle="margin-100-top"
        />

        <div className="container bg-orange-light margin-100-top padding-md-top-bottom">
          <div className="row">
            <div className="col text-center">
              <p className="h4 text-primary">{graphQlResult.callToActionUntenUeberschrift}</p>
              <ContentfulMarkdownText
                text={graphQlResult.callToActionUntenText.callToActionUntenText}
                styleClasses="d-block d-md-none w-100"
              />
              <ContentfulMarkdownText
                text={graphQlResult.callToActionUntenText.callToActionUntenText}
                styleClasses="d-none d-md-block w-75 mx-auto"
              />
              <div className="row">
                <div className="col-12 col-md-1" />
                <div className="col-12 col-md-5 padding-md-top text-md-right">
                  <LinkButton text="AUF FREIEN JOB BEWERBEN" path="/karriere/jobs" styleSpan="space-button-left-right w-100" />
                </div>
                <div className="col-12 col-md-5 padding-md-top text-md-left">
                  <ExternalLinkButton
                    text={graphQlResult.linkZurInitiativBewerbung.linkBezeichnung}
                    _href={graphQlResult.linkZurInitiativBewerbung.linkZurExternenQuelle.linkZurExternenQuelle}
                    _target="_blank"
                    styleSpan="space-button-left-right w-100"
                    handleClick={handleApplyNowClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobsBewerbungTemplate;

export const pageQuery = graphql`
  query jobsBewerbungQuery(
    $id: String!
    $titelbildId: String!
    $titelbildKleinId: String!
    $ansprechpartnerEinsBildId: String!
    $ansprechpartnerZweiBildId: String!
    $gptwId: String!
  ) {
    contentfulSeiteJobsBewerbung(id: { eq: $id }) {
      id
      metaData {
        title
        keywords {
          keywords
        }
        description {
          description
        }
      }
      parent {
        id
      }
      titel
      hauptueberschrift
      titelbild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      titelbildKlein {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      beschreibungUntertitel
      beschreibungTitel
      beschreibungAbsatz1 {
        beschreibungAbsatz1
      }
      beschreibungAbsatz2 {
        beschreibungAbsatz2
      }
      ueberschriftStellenanzeigen
      ueberschriftAnsprechpartnerBewerbungen
      erstesBildAnsprechpartnerBewerbungen {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      zweitesBildAnsprechpartnerBewerbungen {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      beschreibungAnsprechpartnerBewerbungen {
        beschreibungAnsprechpartnerBewerbungen
      }
      gptw {
        untertitel
        titel
        bild {
          id
          title
          file {
            url
            fileName
            contentType
          }
        }
        beschreibung {
          beschreibung
        }
      }
      bewerbungsprozessUntertitel
      bewerbungsprozessTitel
      bewerbungsprozessSchritt1Titel
      bewerbungsprozessSchritt1Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bewerbungsprozessSchritt1Beschreibung {
        bewerbungsprozessSchritt1Beschreibung
      }
      bewerbungsprozessSchritt2Titel
      bewerbungsprozessSchritt2Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bewerbungsprozessSchritt2Beschreibung {
        bewerbungsprozessSchritt2Beschreibung
      }
      bewerbungsprozessSchritt3Titel
      bewerbungsprozessSchritt3Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bewerbungsprozessSchritt3Beschreibung {
        bewerbungsprozessSchritt3Beschreibung
      }
      bewerbungsprozessSchritt4Titel
      bewerbungsprozessSchritt4Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bewerbungsprozessSchritt4Beschreibung {
        bewerbungsprozessSchritt4Beschreibung
      }
      textfeldKontaktdaten {
        textfeldKontaktdaten
      }
      callToActionUntenUeberschrift
      callToActionUntenText {
        callToActionUntenText
      }
      linkZurInitiativBewerbung {
        linkBezeichnung
        linkZurExternenQuelle {
          linkZurExternenQuelle
        }
      }
    }
    allContentfulSeiteStellenanzeige {
      edges {
        node {
          id
          url
          metaData {
            title
            keywords {
              keywords
            }
            description {
              description
            }
          }
          ort
          befristung
          art
          titel
          zuordnungZuKompetenzen {
            name
          }
          ueberschriftGanzOben
          bildStellenanzeige {
            id
            title
            description
            file {
              url
              fileName
              contentType
            }
          }
          absatzEins {
            absatzEins
          }
          spaltenInfoTitelLinks
          spaltenInfoBeschreibungLinksLang {
            spaltenInfoBeschreibungLinksLang
          }
          spaltenInfoTitelMitte
          spaltenInfoBeschreibungMitte {
            spaltenInfoBeschreibungMitte
          }
          spaltenInfoTitelRechts
          spaltenInfoBeschreibungRechts {
            spaltenInfoBeschreibungRechts
          }
          uMantis {
            uMantis
          }
        }
      }
    }
    imageTitelBildSharp: imageSharp(id: { regex: $titelbildId }) {
      sizes(maxWidth: 1600, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
    imageTitelBildKleinSharp: imageSharp(id: { regex: $titelbildKleinId }) {
      sizes(maxWidth: 1600, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
    ansprechpartnerEinsBildSharp: imageSharp(id: { regex: $ansprechpartnerEinsBildId }) {
      sizes(maxWidth: 2000, maxHeight: 1335, quality: 60, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    ansprechpartnerZweiBildSharp: imageSharp(id: { regex: $ansprechpartnerZweiBildId }) {
      sizes(maxWidth: 2000, maxHeight: 1335, quality: 60, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    gptwSharp: imageSharp(id: { regex: $gptwId }) {
      sizes(maxWidth: 1600, quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
