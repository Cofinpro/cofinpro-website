import React from 'react'

import LinkButton from '../../../components/buttons/LinkButton'
import DownloadButton from '../../../components/buttons/DownloadButton'
import MobileToggleWithButton from '../../../components/buttons/MobileToggleWithButton'

import ContentfulMarkdownText from '../../../components/ContentfulMarkdownText'

import DownloadPreviewTextAndImageLayout from '../../../components/layouts/DownloadPreviewTextAndImageLayout'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../../components/images/ImageWrapper'

class NewsMedienUebersicht extends React.Component {
  render() {
    function LayoutDownloadRow(props) {
      const { content, style } = props

      return (
        <div className={'row ' + style.row}>
          <div className="col-12 col-md-4">
            <DownloadButton text={content.itemLeft} />
          </div>
          <div className="col-12 col-md-2" />
          {content.itemRight !== null && (
            <div className="col-12 col-md-4">
              <DownloadButton text={content.itemRight} />
            </div>
          )}
          <div className="col-12 col-md-2" />
        </div>
      )
    }

    function LayoutMax(props) {
      const { content } = props

      let showMoreButton = content.downloads.length > 2 ? true : false

      return (
        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">{content.header}</h2>
              <p>{content.description}</p>
            </div>
            <div className="col-12 col-md-6" />
          </div>
          <div className="row margin-60-top margin-xs-0-top">
            <div className="col-12 col-md-6">
              <div className="row justify-content-center">
                <div className="col-12">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <div>
                        <ContentfulMarkdownText
                          text={'### ' + content.medien[0].header}
                          styleClasses="h4"
                        />
                        <ContentfulMarkdownText
                          text={content.medien[0].subheader}
                          styleClasses="h5"
                        />
                      </div>
                    }
                  />
                </div>
              </div>
              <div className="row justify-content-center margin-40-top margin-xs-20-top">
                <div className="col-12 col-md-8">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <div>
                        <ContentfulMarkdownText
                          text={'### ' + content.medien[1].header}
                          styleClasses="h4"
                        />
                        <ContentfulMarkdownText
                          text={content.medien[1].subheader}
                          styleClasses="h5"
                        />
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row justify-content-center margin-xs-20-top d-none d-md-block">
                <div className="col-12 col-md-8">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <div>
                        <ContentfulMarkdownText
                          text={'### ' + content.medien[2].header}
                          styleClasses="h4"
                        />
                        <ContentfulMarkdownText
                          text={content.medien[2].subheader}
                          styleClasses="h5"
                        />
                      </div>
                    }
                  />
                </div>
              </div>
              <div className="row margin-40-top margin-xs-20-top d-none d-md-block">
                <div className="col-12">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <div>
                        <ContentfulMarkdownText
                          text={'### ' + content.medien[3].header}
                          styleClasses="h4"
                        />
                        <ContentfulMarkdownText
                          text={content.medien[3].subheader}
                          styleClasses="h5"
                        />
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {content.downloads.map(function(item, i) {
            let style = ''

            if (i === 0) {
              style = 'margin-40-top margin-xs-20-top'
            } else if (i === 2) {
              style = 'd-none d-md-flex'
            }

            if (i < 4 && i % 2 === 0) {
              return (
                <LayoutDownloadRow
                  key={i}
                  content={{
                    itemLeft: content.downloads[i].text,
                    itemRight: content.downloads[i + 1].text,
                  }}
                  style={{ row: style }}
                />
              )
            } else {
              return null
            }
          })}
          <div className="collapse" id={'more-' + content.id}>
            {content.downloads.map(function(item, i) {
              if (i % 2 === 0 && i > 1 && i < 4) {
                let itemLeftT = content.downloads[i].text
                let itemRightT =
                  i === content.downloads.length - 1
                    ? null
                    : content.downloads[i + 1].text

                return (
                  <LayoutDownloadRow
                    key={i}
                    content={{
                      itemLeft: itemLeftT,
                      itemRight: itemRightT,
                    }}
                    style={{ row: 'd-flex d-md-none' }}
                  />
                )
              } else {
                return null
              }
            })}
          </div>
          <div className="row margin-40-top margin-xs-0-top">
            <div className="col-12 col-md-4 order-2 order-md-1">
              <LinkButton
                styleSpan="w-md-unset w-100"
                text={content.buttonText}
                path="/beratungsfelder"
              />
            </div>
            <div className="col-12 col-md-4 align-items-center order-1 order-md-2">
              <MobileToggleWithButton
                dataTargetId={'more-' + content.id}
                show={showMoreButton}
              />
            </div>
          </div>
        </div>
      )
    }

    function LayoutDownloads(props) {
      const { content, style } = props

      let showMoreButton = content.downloads.length > 2 ? true : false

      return (
        <div className={'container ' + style.container}>
          <div className="row">
            <div className="col-12">
              <h3 className="h4 margin-40-bottom margin-xs-20-bottom">
                {content.header}
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row justify-content-center">
                <div className="col-12">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <div>
                        <ContentfulMarkdownText
                          text={'### ' + content.medien[0].header}
                          styleClasses="h4"
                        />
                        <ContentfulMarkdownText
                          text={content.medien[0].subheader}
                          styleClasses="h5"
                        />
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-none d-md-block">
              <div className="row margin-xs-20-top">
                <div className="col-12 col-md-8">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <div>
                        <ContentfulMarkdownText
                          text={'### ' + content.medien[1].header}
                          styleClasses="h4"
                        />
                        <ContentfulMarkdownText
                          text={content.medien[1].subheader}
                          styleClasses="h5"
                        />
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row margin-40-top margin-xs-20-top">
            <div className="col-12 col-md-4">
              <DownloadButton text={content.downloads[0].text} />
            </div>
            <div className="col-12 col-md-2" />
            <div className="col-12 col-md-4">
              <DownloadButton text={content.downloads[1].text} />
            </div>
            <div className="col-12 col-md-2" />
          </div>
          <div className="collapse" id={'more-' + content.id}>
            {content.downloads.map(function(item, i) {
              if (i % 2 === 0 && i > 1 && i < 4) {
                let itemLeftT = content.downloads[i].text
                let itemRightT =
                  i === content.downloads.length - 1
                    ? null
                    : content.downloads[i + 1].text

                return (
                  <LayoutDownloadRow
                    key={i}
                    content={{
                      itemLeft: itemLeftT,
                      itemRight: itemRightT,
                    }}
                    style={{ row: 'd-flex d-md-none' }}
                  />
                )
              } else {
                return null
              }
            })}
          </div>
          <div className="row margin-40-top margin-xs-0-top">
            <div className="col-12 col-md-4 order-2 order-md-1">
              <LinkButton
                styleSpan="w-md-unset w-100"
                text={content.buttonText}
                path="/beratungsfelder"
              />
            </div>
            <div className="col-12 col-md-4 align-items-center order-1 order-md-2">
              <MobileToggleWithButton
                show={showMoreButton}
                dataTargetId={'more-' + content.id}
              />
            </div>
          </div>
        </div>
      )
    }

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
              <h1 className="h1">News&amp;Medien</h1>
              <p className="h4 bold-font d-none d-md-block">
                Genda excerum solecusam, venim atur sit illibus anditat harum
                aligendae ratur sus ducid et odigniscilis dolori di seceper.
              </p>
              <p className="d-block d-md-none">
                Genda excerum solecusam, venim atur sit illibus anditat harum
                aligendae ratur sus ducid et odigniscilis dolori di seceper.
              </p>
            </div>
          </div>
        </div>

        <LayoutMax
          content={{
            id: 'veroeffentlichungen',
            header: 'Veröffentlichungen',
            description:
              'Genda excerum solecusam, venim atur sit illibus anditat harum aligendae ratur sus ducid et odigniscilis dolori di seceper roriber iaspidundaes volent repedit fuga. Nam esti conse landi quiamus incillam, atur aliberr oreperio.',
            medien: [
              {
                header: 'Headline Medien/Unterthema 1',
                subheader: 'Subheadline Medien/Unterthema 1',
              },
              {
                header: 'Headline Medien/Unterthema 2',
                subheader: 'Subheadline Medien/Unterthema 2',
              },
              {
                header: 'Headline Medien/Unterthema 3',
                subheader: 'Subheadline Medien/Unterthema 3',
              },
              {
                header: 'Headline Medien/Unterthema 4',
                subheader: 'Subheadline Medien/Unterthema 4',
              },
            ],
            downloads: [
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
            ],
            buttonText: 'ZUM ARCHIV FÜR VERÖFFENTLICHUNGEN',
          }}
          style={{ container: 'margin-60-top margin-xs-40-top ' }}
        />
        <LayoutMax
          content={{
            id: 'pressemeldungen',
            header: 'Pressemeldungen',
            description:
              'Genda excerum solecusam, venim atur sit illibus anditat harum aligendae ratur sus ducid et odigniscilis dolori di seceper roriber iaspidundaes volent repedit fuga. Nam esti conse landi quiamus incillam, atur aliberr oreperio.',
            medien: [
              {
                header: 'Headline Medien/Unterthema 1',
                subheader: 'Subheadline Medien/Unterthema 1',
              },
              {
                header: 'Headline Medien/Unterthema 2',
                subheader: 'Subheadline Medien/Unterthema 2',
              },
              {
                header: 'Headline Medien/Unterthema 3',
                subheader: 'Subheadline Medien/Unterthema 3',
              },
              {
                header: 'Headline Medien/Unterthema 4',
                subheader: 'Subheadline Medien/Unterthema 4',
              },
            ],
            downloads: [
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
            ],
            buttonText: 'ZUM ARCHIV FÜR PRESSEMELDUNGEN',
          }}
        />
        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">Downloads</h2>
              <p className="no-margin">
                Genda excerum solecusam, venim atur sit illibus anditat harum
                aligendae ratur sus ducid et odigniscilis dolori di seceper
                roriber iaspidundaes volent repedit fuga. Nam esti conse landi
                quiamus incillam, atur aliberr oreperio.
              </p>
            </div>
            <div className="col-12 col-md-6" />
          </div>
        </div>

        <LayoutDownloads
          content={{
            id: 'STUDIEN',
            header: 'STUDIEN',
            medien: [
              {
                header: 'Headline Medien/Unterthema 1',
                subheader: 'Subheadline Medien/Unterthema 1',
              },
              {
                header: 'Headline Medien/Unterthema 2',
                subheader: 'Subheadline Medien/Unterthema 2',
              },
            ],
            downloads: [
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
            ],
            buttonText: 'ZUM ARCHIV FÜR STUDIEN',
          }}
          style={{ container: 'margin-60-top margin-xs-40-top ' }}
        />

        <LayoutDownloads
          content={{
            id: 'THESENPAPIERE',
            header: 'THESENPAPIERE',
            medien: [
              {
                header: 'Headline Medien/Unterthema 1',
                subheader: 'Subheadline Medien/Unterthema 1',
              },
              {
                header: 'Headline Medien/Unterthema 2',
                subheader: 'Subheadline Medien/Unterthema 2',
              },
            ],
            downloads: [
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
            ],
            buttonText: 'ZUM ARCHIV FÜR THESENPAPIERE',
          }}
          style={{ container: 'margin-60-top margin-xs-60-top ' }}
        />

        <LayoutDownloads
          content={{
            id: 'WHITEPAPERS',
            header: 'WHITEPAPERS',
            medien: [
              {
                header: 'Headline Medien/Unterthema 1',
                subheader: 'Subheadline Medien/Unterthema 1',
              },
              {
                header: 'Headline Medien/Unterthema 2',
                subheader: 'Subheadline Medien/Unterthema 2',
              },
            ],
            downloads: [
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
            ],
            buttonText: 'ZUM ARCHIV FÜR WHITEPAPERS',
          }}
          style={{ container: 'margin-60-top margin-xs-60-top ' }}
        />

        <LayoutDownloads
          content={{
            id: 'LOESUNGSSKIZZEN',
            header: 'LÖSUNGSSKIZZEN',
            medien: [
              {
                header: 'Headline Medien/Unterthema 1',
                subheader: 'Subheadline Medien/Unterthema 1',
              },
              {
                header: 'Headline Medien/Unterthema 2',
                subheader: 'Subheadline Medien/Unterthema 2',
              },
            ],
            downloads: [
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
              {
                text:
                  'MiFID II Umsetzung  \n Folgen der MIFID II-Umsetzung:  \n Das ändert sich für Bankkunden',
              },
            ],
            buttonText: 'ZUM ARCHIV FÜR LÖSUNGSSKIZZEN',
          }}
          style={{ container: 'margin-60-top margin-xs-60-top ' }}
        />

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">Allgemein</h2>
              <p className="no-margin">
                Genda excerum solecusam, venim atur sit illibus anditat harum
                aligendae ratur sus ducid et odigniscilis dolori di seceper
                roriber iaspidundaes volent repedit fuga. Nam esti conse landi
                quiamus incillam, atur aliberr oreperio.
              </p>
            </div>
            <div className="col-12 col-md-6" />
          </div>
        </div>
        <DownloadPreviewTextAndImageLayout
          style={{ container: 'margin-40-top margin-xs-0-top' }}
        />
      </div>
    )
  }
}

export default NewsMedienUebersicht
