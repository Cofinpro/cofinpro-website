import React from 'react'
import Link from 'gatsby-link'

import LinkButton from '../../components/buttons/LinkButton'
import DownloadButton from '../../components/buttons/DownloadButton'
import MobileToggleWithButton from '../../components/buttons/MobileToggleWithButton'

import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'

import DownloadPreviewTextAndImageLayout from '../../components/layouts/DownloadPreviewTextAndImageLayout'

import NavigationBeratungsfelder from '../../components/navigation/NavigationBeratungsfelder'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
  SOURCE_TYP_SHARP,
} from '../../components/images/ImageWrapper'

class NewsMedienUebersichtTemplate extends React.Component {
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
                  <Link className="text-dark" to={`/`}>
                    <ImageWrapper
                      sourceType={SOURCE_TYP_SHARP}
                      source={content.images[0]}
                      overlayElement={
                        <div className="text-underline">
                          <p className="h4 d-none d-lg-block no-margin bold-font">
                            {content.medien[0].header}
                          </p>
                          <p className="h5 d-block d-lg-none no-margin bold-font">
                            {content.medien[0].header}
                          </p>
                          {content.medien[0].subheader !== undefined && (
                            <p className="text-sm-small">
                              {content.medien[0].subheader}
                            </p>
                          )}
                        </div>
                      }
                    />
                  </Link>
                </div>
              </div>
              <div className="row justify-content-center margin-40-top margin-xs-20-top">
                <div className="col-12 col-md-8">
                  <Link className="text-dark" to={`/`}>
                    <ImageWrapper
                      sourceType={SOURCE_TYP_SHARP}
                      source={content.images[1]}
                      overlayElement={
                        <div className="text-underline">
                          <p className="h4 d-none d-lg-block no-margin bold-font">
                            {content.medien[1].header}
                          </p>
                          <p className="h5 d-block d-lg-none no-margin bold-font">
                            {content.medien[1].header}
                          </p>
                          {content.medien[1].subheader !== undefined && (
                            <p className="text-sm-small">
                              {content.medien[1].subheader}
                            </p>
                          )}
                        </div>
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row justify-content-center margin-xs-20-top d-none d-md-block">
                <div className="col-12 col-md-8">
                  <Link className="text-dark" to={`/`}>
                    <ImageWrapper
                      sourceType={SOURCE_TYP_SHARP}
                      source={content.images[2]}
                      overlayElement={
                        <div className="text-underline">
                          <p className="h4 d-none d-lg-block no-margin bold-font">
                            {content.medien[2].header}
                          </p>
                          <p className="h5 d-block d-lg-none no-margin bold-font">
                            {content.medien[2].header}
                          </p>
                          {content.medien[2].subheader !== undefined && (
                            <p className="text-sm-small">
                              {content.medien[2].subheader}
                            </p>
                          )}
                        </div>
                      }
                    />
                  </Link>
                </div>
              </div>
              <div className="row margin-40-top margin-xs-20-top d-none d-md-block">
                <div className="col-12">
                  <Link className="text-dark" to={`/`}>
                    <ImageWrapper
                      sourceType={SOURCE_TYP_SHARP}
                      source={content.images[3]}
                      overlayElement={
                        <div className="text-underline">
                          <p className="h4 d-none d-lg-block no-margin bold-font">
                            {content.medien[3].header}
                          </p>
                          <p className="h5 d-block d-lg-none no-margin bold-font">
                            {content.medien[3].header}
                          </p>
                          {content.medien[3].subheader !== undefined && (
                            <p className="text-sm-small">
                              {content.medien[3].subheader}
                            </p>
                          )}
                        </div>
                      }
                    />
                  </Link>
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
                  <Link className="text-dark" to={`/`}>
                    <ImageWrapper
                      sourceType={SOURCE_TYP_SHARP}
                      source={content.images[0]}
                      overlayElement={
                        <div className="text-underline">
                          <p className="h4 d-none d-lg-block no-margin bold-font">
                            {content.medien[0].header}
                          </p>
                          <p className="h5 d-block d-lg-none no-margin bold-font">
                            {content.medien[0].header}
                          </p>
                          {content.medien[0].subheader !== undefined && (
                            <p className="text-sm-small">
                              {content.medien[0].subheader}
                            </p>
                          )}
                        </div>
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-none d-md-block">
              <div className="row margin-xs-20-top">
                <div className="col-12 col-md-8">
                  <Link className="text-dark" to={`/`}>
                    <ImageWrapper
                      sourceType={SOURCE_TYP_SHARP}
                      source={content.images[1]}
                      overlayElement={
                        <div className="text-underline">
                          <p className="h4 d-none d-lg-block no-margin bold-font">
                            {content.medien[1].header}
                          </p>
                          <p className="h5 d-block d-lg-none no-margin bold-font">
                            {content.medien[1].header}
                          </p>
                          {content.medien[1].subheader !== undefined && (
                            <p className="text-sm-small">
                              {content.medien[1].subheader}
                            </p>
                          )}
                        </div>
                      }
                    />
                  </Link>
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

        <div className="container margin-80-top margin-xs-40-top">
          <div className="row">
            <div className="col-12">
              <NavigationBeratungsfelder urlPrefix="news-medien" />
            </div>
          </div>
        </div>

        <LayoutMax
          content={{
            id: 'veroeffentlichungen',
            header: 'Veröffentlichungen',
            images: [
              this.props.data.veroeffentlichungenOneSharp,
              this.props.data.veroeffentlichungenTwoSharp,
              this.props.data.veroeffentlichungenThreeSharp,
              this.props.data.veroeffentlichungenFourSharp,
            ],
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
            images: [
              this.props.data.pressemeldungOneSharp,
              this.props.data.pressemeldungTwoSharp,
              this.props.data.pressemeldungThreeSharp,
              this.props.data.pressemeldungFourSharp,
            ],
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
            images: [
              this.props.data.studienOneSharp,
              this.props.data.studienTwoSharp,
            ],
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
            images: [
              this.props.data.thesenpapierOneSharp,
              this.props.data.thesenpapierTwoSharp,
            ],
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
            images: [
              this.props.data.whitepapersOneSharp,
              this.props.data.whitepapersTwoSharp,
            ],
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
            images: [
              this.props.data.loesungsskizzenOneSharp,
              this.props.data.loesungsskizzenTwoSharp,
            ],
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

export default NewsMedienUebersichtTemplate

export const pageQuery = graphql`
  query newsMediaOverviewQuery {
    veroeffentlichungenOneSharp: imageSharp(
      id: { regex: "/medien-veroeffentlichungen-a14/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    veroeffentlichungenTwoSharp: imageSharp(
      id: { regex: "/medien-veroeffentlichungen-a29/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    veroeffentlichungenThreeSharp: imageSharp(
      id: { regex: "/medien-veroeffentlichungen-a16/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    veroeffentlichungenFourSharp: imageSharp(
      id: { regex: "/medien-veroeffentlichungen-a1/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    pressemeldungOneSharp: imageSharp(
      id: { regex: "/medien-pressemeldungen-b50/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    pressemeldungTwoSharp: imageSharp(
      id: { regex: "/medien-pressemeldungen-b3/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    pressemeldungThreeSharp: imageSharp(
      id: { regex: "/medien-pressemeldungen-b2/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    pressemeldungFourSharp: imageSharp(
      id: { regex: "/medien-pressemeldungen-b39/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    studienOneSharp: imageSharp(id: { regex: "/medien-studien-a42/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    studienTwoSharp: imageSharp(id: { regex: "/medien-studien-a7/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    thesenpapierOneSharp: imageSharp(
      id: { regex: "/medien-thesenpapiere-a26/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    thesenpapierTwoSharp: imageSharp(
      id: { regex: "/medien-thesenpapiere-a6/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    whitepapersOneSharp: imageSharp(id: { regex: "/medien-whitepapers-b8/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    whitepapersTwoSharp: imageSharp(id: { regex: "/medien-whitepapers-b31/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    loesungsskizzenOneSharp: imageSharp(
      id: { regex: "/medien-loesungsskizzen-b32/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    loesungsskizzenTwoSharp: imageSharp(
      id: { regex: "/medien-loesungsskizzen-b26/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
