import React from 'react'

import LinkButton from '../../../components/buttons/LinkButton'

import {
  ImageWrapper,
  SOURCE_TYP_SHARP,
} from '../../../components/images/ImageWrapper'

class BeratungsfelderFach extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <div className="container-fluid no-gutters">
          <div className="row">
            <div className="col-md-12">
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.fachImageSharp}
              />
            </div>
          </div>
        </div>
        <div className="container margin-40-top">
          <div className="row">
            <div className="col-md-2">
              <div className="d-none d-md-block">
                <ImageWrapper
                  sourceType={SOURCE_TYP_SHARP}
                  source={this.props.data.iconImageSharp}
                />
              </div>
              <div className="d-block d-md-none">
                <ImageWrapper
                  sourceType={SOURCE_TYP_SHARP}
                  source={this.props.data.iconImageSharp}
                  styleClasses="beratungs-icons"
                />
              </div>
            </div>
          </div>
          <div className="row margin-40-top">
            <div className="col-md-7">
              <h1 className="h1">Unsere Fachberatung</h1>
              <h2 className="h2 d-none d-md-block">
                Wir sind Experten <br />für Kredit und Wertpapier
              </h2>
              <p className="d-block d-md-none">
                Wir sind Experten für Kredit und Wertpapier
              </p>
              <p className="text-left margin-40-top margin-20-bottom margin-xs-20-top">
                Als Berater für führende Banken und Asset Manager rüsten wir
                unsere Kunden für die Zukunft. Um sie in Sachen Digitalisierung
                und Regulierung wettbewerbsfähig zu halten, setzen wir die
                Zirkelspitze dort an, wo unsere Kunden ihr Geschäft
                weiterentwickeln wollen. Denn fundierte Beratung soll Angebote
                kundenzentrierter, Prozesse wirksamer, Produkte innovativer und
                die Erfüllung regulatorischer Maßnahmen ressourceneffizienter
                machen.
              </p>
            </div>
            <div className="col-md-5">
              <LinkButton
                text="Kreditgeschäft"
                styleSpan="btn-lg btn-block margin-20-bottom margin-20-top"
                path="/beratungsfelder/kredit"
              />
              <LinkButton
                text="Wertpapiergeschäft"
                styleSpan="btn-lg btn-block"
                path="/beratungsfelder/wertpapier"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <p className="text-left margin-40-top margin-xs-40-top">
                Weil wir lösungsorientierte Experten für Kredit und Wertpapier
                sind, aber auch Unternehmer durch und durch, packen wir
                Projektvorhaben mit fachlichem Expertenwissen und dazu mit
                technologischem Know-how an. Unsere fachliche Erfahrung
                erweitern wir also um das Verständnis komplexer Prozesse und der
                Abhängigkeiten zur Technologie. Mit klassischen und agilen
                Vorgehensweisen kennen wir uns bestens aus, und wir nehmen die
                Hürden, die bei der Umsetzung von Lösungen in die Prozesse und
                IT-Landschaften unserer Kunden entstehen.
              </p>
            </div>
            <div className="col-md-3" />
          </div>
        </div>
      </div>
    )
  }
}

export default BeratungsfelderFach

export const pageQuery = graphql`
  query BeratungsfelderFachQuery {
    fachImageSharp: imageSharp(id: { regex: "/Fachberatung/" }) {
      sizes(quality: 100, maxWidth: 2000, maxHeight: 1000, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    iconImageSharp: imageSharp(id: { regex: "/fachberatung/" }) {
      sizes(quality: 100, maxWidth: 130, maxHeight: 143, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
