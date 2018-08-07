import React from 'react'

import ReferenzAndDownload from '../../../components/ReferenzAndDownload'
import ContentfulMarkdownText from '../../../components/ContentfulMarkdownText'
import RelevanteBeratungsfelder from '../RelevanteBeratungsfelder'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../../components/images/ImageWrapper'

class FokusthemenDetail extends React.Component {
  render() {
    return (
      <div>
        <div className="container margin-40-top">
          <div className="row">
            <div className="col-md-2 col-4">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 400,
                  height: 350,
                }}
              />
            </div>
            <div className="col-md-6" />
            <div className="col-md-4 d-md-block d-none">
              <RelevanteBeratungsfelder
                beratungsfelder={[
                  'Managementberatung',
                  'Fachberatung Wertpapiergeschäft',
                ]}
              />
            </div>
          </div>
        </div>

        <div className="container margin-60-top margin-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1 className="h1">Fokusthemen</h1>
              <p className="h4 margin-20-top d-md-block d-none">
                Finanzdienstleister stehen vor großen Herausforderungen, um den
                durch Digitalisierung entstehenden neuen Geschäftsmodellen zügig
                und erfolgreich zu begegnen.
              </p>
              <p className="d-md-none">
                Finanzdienstleister stehen vor großen Herausforderungen, um den
                durch Digitalisierung entstehenden neuen Geschäftsmodellen zügig
                und erfolgreich zu begegnen.
              </p>
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row d-md-flex">
            <div className="col-md-6 col-12">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
                overlayElement={
                  <ContentfulMarkdownText
                    text="### Fokusthema 4"
                    styleClasses="h4"
                  />
                }
              />
            </div>
            <div className="col-md-6 col-12 margin-xs-40-top">
              <div className="row">
                <div className="col-4 d-none d-md-block" />
                <div className="col-md-8 col-12">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Fokusthema 5"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
              <div className="row margin-40-top">
                <div className="col-md-8 col-12">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Fokusthema 6"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-40-top">
          <div className="row">
            <div className="col-12 d-md-none">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 600,
                  height: 350,
                }}
              />
            </div>
            <div className="col-12 col-md-6 margin-xs-20-top">
              <h1 className="h2">Die Herausforderung</h1>
              <ContentfulMarkdownText text="Banken und KVGen müssen sich auf Änderungen der Marktstruktur durch MiFID II / MiFIR einstellen
                      Der außerbörsliche Handel von Finanz-instrumenten wird stark eingeschränkt:
                      durch die Einführung einer Handels-platzpflicht für Aktien und clearingpflichtige Derivate,
                      die Ausweitung der Systematischen Internalisierung sowie
                      Pflichten der Vor- und Nachhandels- transparenz auf Schuldverschreibungen und Derivate
                      Anforderungen aus EMIR, der bilateralen Besicherung von derivativen Geschäften und dem SFTR Reporting stellen zusätzliche Herausforderungen für das Collateral Management dar" />
            </div>
            <div className="col-md-6 d-md-block d-none">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 600,
                  height: 350,
                }}
              />
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-md-6" />
            <div className="col-md-6 margin-xs-20-top">
              <h1 className="h2">Unser Lösungsansatz</h1>
              <ContentfulMarkdownText text="Banken und KVGen müssen sich auf Änderungen der Marktstruktur durch MiFID II / MiFIR einstellen
                      Der außerbörsliche Handel von Finanz-instrumenten wird stark eingeschränkt:
                      durch die Einführung einer Handels-platzpflicht für Aktien und clearingpflichtige Derivate,
                      die Ausweitung der Systematischen Internalisierung sowie
                      Pflichten der Vor- und Nachhandels- transparenz auf Schuldverschreibungen und Derivate
                      Anforderungen aus EMIR, der bilateralen Besicherung von derivativen Geschäften und dem SFTR Reporting stellen zusätzliche Herausforderungen für das Collateral Management dar" />
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-md-6 margin-xs-20-top">
              <h1 className="h2">Ihr Nutzen</h1>
              <ContentfulMarkdownText text="Banken und KVGen müssen sich auf Änderungen der Marktstruktur durch MiFID II / MiFIR einstellen
                      Der außerbörsliche Handel von Finanz-instrumenten wird stark eingeschränkt:
                      durch die Einführung einer Handels-platzpflicht für Aktien und clearingpflichtige Derivate,
                      die Ausweitung der Systematischen Internalisierung sowie
                      Pflichten der Vor- und Nachhandels- transparenz auf Schuldverschreibungen und Derivate
                      Anforderungen aus EMIR, der bilateralen Besicherung von derivativen Geschäften und dem SFTR Reporting stellen zusätzliche Herausforderungen für das Collateral Management dar" />
            </div>
          </div>
        </div>

        <div className="container margin-100-top">
          <ReferenzAndDownload />
        </div>
      </div>
    )
  }
}

export default FokusthemenDetail
