import React from 'react'

import LinkButton from '../../components/buttons/LinkButton'
import ExternalLinkButton from '../../components/buttons/ExternalLinkButton'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../components/images/ImageWrapper'

class NewsMedienVerteiler extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
              <h1 className="h1">Unser Medienforum</h1>
              <p className="h4 bold-font d-none d-md-block">
                Weil Zukunft unser Geschäft ist, tut sich bei uns ständig etwas,
                und natürlich wollen wir Sie daran teilhaben lassen. Wenn Sie
                erfahren möchten, welche Neuigkeiten unsere Experten haben, sind
                Sie hier ganz richtig.
              </p>
              <p className="d-block d-md-none">
                Weil Zukunft unser Geschäft ist, tut sich bei uns ständig etwas,
                und natürlich wollen wir Sie daran teilhaben lassen. Wenn Sie
                erfahren möchten, welche Neuigkeiten unsere Experten haben, sind
                Sie hier ganz richtig.
              </p>
            </div>
          </div>
        </div>

        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
              />
            </div>
            <div className="col-12 col-md-6">
              <h2 className="margin-20-bottom margin-xs-20-top">
                Neues von Cofinpro
              </h2>
              <p>
                Hier finden Sie unsere sämtlichen Veröffentlichungen: von
                Publikationen in digitalen und analogen Fachmedien über
                Whitepaper, Studien und Thesenpapiere bis zu Pressemitteilungen
                und unserem Unternehmensfolder. Alles natürlich rund um unsere
                Fachberatung in den Bereichen Kredit und Wertpapier, unsere
                Management- und Technologieberatung.
              </p>
              <LinkButton
                styleSpan="w-100 w-md-unset margin-10-top"
                text="MEHR"
                path="/news-medien/uebersicht"
              />
            </div>
          </div>
        </div>

        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <h2 className="margin-20-bottom margin-xs-20-top">Unser Blog</h2>
              <p>
                Was treiben unsere Technologieberater? Sehr viel, das ist schon
                mal klar. Hier erfahren Sie aus erster Hand, welche Themen uns
                derzeit beschäftigen und welche Lösungswege wir gehen. Dazu
                gehört auch unser eigener Podcast, für den sich unsere Experten
                regelmäßig ans Mikro setzen, um aktuelle Herausforderungen und
                Trendthemen zu diskutieren.
              </p>
              <ExternalLinkButton
                styleSpan="w-100 w-md-unset margin-10-top"
                text="MEHR"
                _target="_blank"
                _href="https://medium.com/cofinpro"
              />
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsMedienVerteiler
