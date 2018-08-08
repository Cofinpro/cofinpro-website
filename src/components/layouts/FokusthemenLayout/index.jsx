import React from 'react'
import Link from 'gatsby-link'

import LinkButton from '../../buttons/LinkButton'
import MobileToggleWithButton from '../../buttons/MobileToggleWithButton'
import ContentfulMarkdownText from '../../ContentfulMarkdownText'

import { ImageWrapper, SOURCE_TYP_ICON_IMAGE } from '../../images/ImageWrapper'

class FokusthemenLayout extends React.Component {
  render() {
    function PreviewImage(props) {
      const { url, header, color } = props
      return (
        <Link to={'/fokusthemen/thema/' + url}>
          <ImageWrapper
            sourceType={SOURCE_TYP_ICON_IMAGE}
            source={'Anlegerschutz'}
            style={{
              container: color,
            }}
            overlayElement={
              <div>
                <ContentfulMarkdownText
                  text={'### ' + header}
                  styleClasses="h4 d-none d-lg-block"
                />
                <ContentfulMarkdownText
                  text={'### ' + header}
                  styleClasses="h5 d-block d-lg-none"
                />
              </div>
            }
          />
        </Link>
      )
    }

    const pathPrefix = process.env_ENV === 'development' ? '' : __PATH_PREFIX__

    const { header, description, fokusthemen, style } = this.props

    const testImageStyle = {
      height: '250px',
      width: '100%',
      display: 'block',
    }

    const colorSchema = [
      '--blue-yellow',
      '--grey-orange',
      '--orange-pink',
      '--grey-blue',
      '--pink-orange',
      '--yellow-blue',
      '--orange-pink',
      '--yellow-orange',
      '--pink-blue',
      '--blue-orange',
    ]

    let mobileFokusthemaText = null

    let indexOfFokusthemaWithText =
      fokusthemen.length > 2 ? 2 : fokusthemen.length - 1

    if (fokusthemen.length > 0) {
      mobileFokusthemaText = (
        <div className="col-12">
          <ContentfulMarkdownText
            text={
              fokusthemen[indexOfFokusthemaWithText].headline !== undefined
                ? '„' +
                  fokusthemen[indexOfFokusthemaWithText].headline.headline +
                  '“'
                : ''
            }
            styleClasses="h3 margin-40-top"
          />
        </div>
      )
    }

    let styleRowFokusthema8 =
      fokusthemen.length < 10
        ? 'margin-40-top align-items-start'
        : 'margin-40-top align-items-center'
    let styleColFokusthema8 =
      fokusthemen.length < 10 ? 'margin-120-top margin-md-60-top' : ''

    styleRowFokusthema8 = fokusthemen.length < 9 ? '' : styleRowFokusthema8
    styleColFokusthema8 = fokusthemen.length < 9 ? '' : styleColFokusthema8

    let styleClassContainer4till6 =
      fokusthemen.length < 6
        ? 'align-items-start margin-40-top'
        : 'align-items-end negative-margin-80-top'

    let styleColFokusthema3 =
      fokusthemen.length < 6 ? 'negative-margin-100-top' : ''

    return (
      <div>
        <div className={'container ' + style.container}>
          <div className="row">
            <div className="col-12 col-md-6 d-flex">
              <div className="row">
                <div className="col-12">
                  <h2>{header}</h2>
                  <p>{description}</p>
                </div>
                <div className="col-12 d-none d-md-block align-self-end">
                  {fokusthemen.length >= 3 && (
                    <PreviewImage
                      url={fokusthemen[2].url}
                      header={fokusthemen[2].uberschriftGanzOben}
                      color={'--blue-yellow'}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-6 d-none d-md-block">
              {fokusthemen.length >= 1 && (
                <div className="row">
                  <div className="col-2" />
                  <div className="col-8">
                    <PreviewImage
                      url={fokusthemen[0].url}
                      header={fokusthemen[0].uberschriftGanzOben}
                      color={'--grey-orange'}
                    />
                  </div>
                  <div className="col-2" />
                </div>
              )}
              {fokusthemen.length >= 2 && (
                <div className="row">
                  <div className="col-12 margin-60-top margin-120-bottom">
                    <PreviewImage
                      url={fokusthemen[1].url}
                      header={fokusthemen[1].uberschriftGanzOben}
                      color={'--orange-pink'}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="row d-flex d-md-none">
            {fokusthemen.map((item, i) => {
              if (i < 3) {
                return (
                  <div
                    className="col-12 margin-20-top"
                    key={'fokusthema-mobile-' + i}
                  >
                    <PreviewImage
                      url={fokusthemen[i].url}
                      header={fokusthemen[i].uberschriftGanzOben}
                      color={colorSchema[i]}
                    />
                  </div>
                )
              } else {
                return null
              }
            })}
            {mobileFokusthemaText}
          </div>
          {fokusthemen.length >= 3 && (
            <div className="row d-flex d-md-none">
              <div className="collapse" id="collapse-more-fokusthemen">
                {fokusthemen.map((item, i) => {
                  if (i >= 3 && i < 10) {
                    return (
                      <div
                        className="col-12 margin-20-top"
                        key={'fokusthema-mobile-' + i}
                      >
                        <PreviewImage
                          url={fokusthemen[i].url}
                          header={fokusthemen[i].uberschriftGanzOben}
                          color={colorSchema[i]}
                        />
                      </div>
                    )
                  } else {
                    return null
                  }
                })}
              </div>
              <div className="col-12">
                <MobileToggleWithButton
                  show={true}
                  dataTargetId={'collapse-more-fokusthemen'}
                  styleClasses={'margin-20-top'}
                />
              </div>
            </div>
          )}
          {fokusthemen.length >= 4 && (
            <div
              className={'row d-none d-md-flex ' + styleClassContainer4till6}
            >
              <div className="col-1" />
              <div className="col-6">
                {fokusthemen.length >= 5 && (
                  <PreviewImage
                    url={fokusthemen[4].url}
                    header={fokusthemen[4].uberschriftGanzOben}
                    color={'--grey-blue'}
                  />
                )}
              </div>
              <div className="col-5">
                <div className={'row ' + styleColFokusthema3}>
                  <div className="col-2" />
                  <div className="col-10">
                    {fokusthemen.length >= 4 && (
                      <PreviewImage
                        url={fokusthemen[3].url}
                        header={fokusthemen[3].uberschriftGanzOben}
                        color={'--pink-orange'}
                      />
                    )}
                  </div>
                </div>
                {fokusthemen.length >= 6 && (
                  <div className="row margin-40-top">
                    <div className="col-10">
                      <PreviewImage
                        url={fokusthemen[5].url}
                        header={fokusthemen[5].uberschriftGanzOben}
                        color={'--orange-pink'}
                      />
                    </div>
                    <div className="col-2" />
                  </div>
                )}
              </div>
            </div>
          )}

          {fokusthemen.length >= 7 && (
            <div className="row d-none d-md-flex align-items-center margin-40-top">
              <div className="col-8">
                <PreviewImage
                  url={fokusthemen[6].url}
                  header={fokusthemen[6].uberschriftGanzOben}
                  color={'--orange-pink'}
                />
              </div>
              <div className="col-4">
                <ContentfulMarkdownText
                  text={
                    fokusthemen[6].headline !== undefined
                      ? '„' + fokusthemen[6].headline.headline + '“'
                      : ''
                  }
                  styleClasses="h3 h5-md margin-40-top"
                />
              </div>
            </div>
          )}
          <div className={'row d-none d-md-flex ' + styleRowFokusthema8}>
            <div className={'col-6 ' + styleColFokusthema8}>
              {fokusthemen.length >= 9 && (
                <PreviewImage
                  url={fokusthemen[8].url}
                  header={fokusthemen[8].uberschriftGanzOben}
                  color={'--yellow-orange'}
                />
              )}
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  {fokusthemen.length >= 8 && (
                    <PreviewImage
                      url={fokusthemen[7].url}
                      header={fokusthemen[7].uberschriftGanzOben}
                      color={'--pink-blue'}
                    />
                  )}
                </div>
                <div className="col-12">
                  {fokusthemen.length >= 10 && (
                    <div className="row">
                      <div className="col-4" />
                      <div className="col-8 margin-40-top margin-120-bottom margin-md-0-top margin-md-0-bottom">
                        <PreviewImage
                          url={fokusthemen[9].url}
                          header={fokusthemen[9].uberschriftGanzOben}
                          color={'--blue-orange'}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row margin-40-top margin-xs-20-top">
            <div className="col-12 col-md-4 order-2 order-md-1">
              <LinkButton
                styleSpan="w-100 w-md-unset"
                text="FOKUSTHEMEN ÜBERSICHT"
                path="/fokusthemen/managementberatung"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FokusthemenLayout
