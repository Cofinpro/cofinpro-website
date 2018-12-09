import React from 'react';
import { graphql } from 'gatsby';

import LinkButton from 'components/buttons/LinkButton';
import PageIntroText from 'components/PageIntroText';
import { ImageWrapper, SourceTyp } from 'components/images/ImageWrapper';
import { SharpImage } from 'models/SharpImage';

interface Props {
  data: {
    titelBildDesktopSharp: SharpImage;
    titelBildMobileSharp: SharpImage;
  };
}

class BeratungsfelderFach extends React.Component<Props> {
  render() {
    return (
      <div>
        <div className="container negative-margin-30-top">
          <div className="row">
            <div className="col-md-12">
              <div className="d-none d-md-block">
                <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.titelBildDesktopSharp} />
              </div>
              <div className="d-block d-md-none">
                <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.titelBildMobileSharp} />
              </div>
            </div>
          </div>
        </div>
        <div className="container margin-60-top margin-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-7">
              <div className="row">
                <div className="col-3 col-lg-2">
                  <ImageWrapper sourceType={SourceTyp.Bootstrap} source={'/img/beratungsfelder/fach/Fachberatung-Icon.png'} />
                </div>
              </div>
              <div className="row margin-20-top">
                <div className="col-md-12">
                  <h1 className="h1">Unsere Fachberatung</h1>
                  <h2 className="h2 normal-font margin-20-top d-none d-md-block">
                    Wir sind Experten <br />
                    für Kredit und Wertpapier
                  </h2>
                  <p className="normal-font d-block d-md-none">
                    Wir sind Experten <br />
                    für Kredit und Wertpapier
                  </p>
                  <PageIntroText
                    content={{
                      text:
                        'Als Berater für führende Banken und Asset Manager rüsten wir unsere Kunden für die Zukunft. Um sie in Sachen Digitalisierung und Regulierung wettbewerbsfähig zu halten, setzen wir die Zirkelspitze dort an, wo unsere Kunden ihr Geschäft weiterentwickeln wollen. Denn fundierte Beratung soll Angebote kundenzentrierter, Prozesse wirksamer, Produkte innovativer und die Erfüllung regulatorischer Maßnahmen ressourceneffizienter machen.',
                    }}
                    style={{ container: 'margin-40-top margin-xs-0-top' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-5">
              <div className="row d-none d-md-block">
                <div className="col-3 col-lg-2">
                  <ImageWrapper
                    sourceType={SourceTyp.Bootstrap}
                    source={'/img/beratungsfelder/fach/Fachberatung-Icon.png'}
                    styleClasses="img-fluid margin-20-bottom not-visible"
                  />
                </div>
              </div>
              <LinkButton
                text="Kreditgeschäft"
                styleSpan="btn-lg btn-block margin-20-bottom margin-20-top"
                path="/beratungsfelder/kredit"
              />
              <LinkButton text="Wertpapiergeschäft" styleSpan="btn-lg btn-block" path="/beratungsfelder/wertpapier" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <p className="text-left margin-40-top margin-xs-40-top">
                Weil wir lösungsorientierte Experten für Kredit und Wertpapier sind, aber auch Unternehmer durch und durch, packen wir
                Projektvorhaben mit fachlichem Expertenwissen und dazu mit technologischem Know-how an. Unsere fachliche Erfahrung erweitern
                wir also um das Verständnis komplexer Prozesse und der Abhängigkeiten zur Technologie. Mit klassischen und agilen
                Vorgehensweisen kennen wir uns bestens aus, und wir nehmen die Hürden, die bei der Umsetzung von Lösungen in die Prozesse
                und IT-Landschaften unserer Kunden entstehen.
              </p>
            </div>
            <div className="col-md-3" />
          </div>
        </div>
      </div>
    );
  }
}

export default BeratungsfelderFach;

export const pageQuery = graphql`
  query BeratungsfelderFachQuery {
    titelBildDesktopSharp: imageSharp(id: { regex: "/Fachberatung-Titelbild-Desktop/" }) {
      fluid(quality: 80, maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
    titelBildMobileSharp: imageSharp(id: { regex: "/Fachberatung-Titelbild-Mobile/" }) {
      fluid(quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
