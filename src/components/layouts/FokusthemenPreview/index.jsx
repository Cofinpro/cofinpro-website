import React from 'react'
import PropTypes from 'prop-types'

import { ImageWrapper, SOURCE_TYP_PLACEHOLDER } from '../../images/ImageWrapper'
import ContentfulMarkdownText from '../../ContentfulMarkdownText'

class FokusthemenPreview extends React.Component {
  render() {
    const { items } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    console.log(items.length)

    return (
      <div>
        <div
          className="row"
          style={{
            display: items.length >= 10 ? 'flex' : 'none',
          }}
        >
          <div className="col-12 col-md-6 d-flex">
            <div
              className="row"
              style={{
                display: items.length >= 11 ? 'flex' : 'none',
              }}
            >
              <div className="col-12 d-none d-md-block align-self-end">
                <ImageWrapper
                  sourceType={SOURCE_TYP_PLACEHOLDER}
                  source={{
                    width: 1200,
                    height: 800,
                  }}
                  overlayElement={
                    <ContentfulMarkdownText
                      text="### Fokusthema 1"
                      styleClasses="h4"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-6 d-none d-md-block">
            <div
              className="row"
              style={{
                display: items.length >= 10 ? 'flex' : 'none',
              }}
            >
              <div className="col-12">
                <ImageWrapper
                  sourceType={SOURCE_TYP_PLACEHOLDER}
                  source={{
                    width: 1200,
                    height: 800,
                  }}
                  styleClasses="margin-60-top margin-120-bottom"
                  overlayElement={
                    <ContentfulMarkdownText
                      text="### Fokusthema 3"
                      styleClasses="h4"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            'row d-none d-md-flex negative-margin-80-top ' +
            (items.length >= 12 ? '' : 'hidden')
          }
        >
          <div className="col-1" />
          <div className="col-6">
            <div
              className="row margin-180-top"
              style={{
                display: items.length >= 13 ? 'flex' : 'none',
              }}
            >
              <div className="col-12">
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
            </div>
          </div>
          <div className="col-5">
            <div
              className="row"
              style={{
                display: items.length >= 12 ? 'flex' : 'none',
              }}
            >
              <div className="col-2" />
              <div className="col-10">
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
            <div
              className="row margin-40-top"
              style={{
                display: items.length >= 14 ? 'flex' : 'none',
              }}
            >
              <div className="col-10">
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
              <div className="col-2" />
            </div>
          </div>
        </div>

        <div
          className={
            'row d-none d-md-flex align-items-center margin-40-top ' +
            (items.length >= 15 ? '' : 'hidden')
          }
        >
          <div className="col-8">
            <ImageWrapper
              sourceType={SOURCE_TYP_PLACEHOLDER}
              source={{
                width: 1200,
                height: 800,
              }}
              overlayElement={
                <ContentfulMarkdownText
                  text="### Fokusthema 7"
                  styleClasses="h4"
                />
              }
            />
          </div>
          <div className="col-4">
            <p className="h3">
              „tibusda volorum quiam, volenimus aut esti asseque velecatus. Fere
              reic tem seque dus eum rectur sit latemperovit quam sumendi
              nectibus.“
            </p>
          </div>
        </div>
        <div
          className={
            'row d-none d-md-flex margin-40-top ' +
            (items.length >= 16 ? '' : 'hidden')
          }
        >
          <div className="col-6">
            <div
              className="row margin-140-top"
              style={{
                display: items.length >= 17 ? 'flex' : 'none',
              }}
            >
              <div className="col-12">
                <ImageWrapper
                  sourceType={SOURCE_TYP_PLACEHOLDER}
                  source={{
                    width: 1200,
                    height: 800,
                  }}
                  overlayElement={
                    <ContentfulMarkdownText
                      text="### Fokusthema 8"
                      styleClasses="h4"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              className="row"
              style={{
                display: items.length >= 16 ? 'flex' : 'none',
              }}
            >
              <div className="col-12">
                <ImageWrapper
                  sourceType={SOURCE_TYP_PLACEHOLDER}
                  source={{
                    width: 1200,
                    height: 800,
                  }}
                  overlayElement={
                    <ContentfulMarkdownText
                      text="### Fokusthema 9"
                      styleClasses="h4"
                    />
                  }
                />
              </div>
            </div>
            <div
              className="row margin-40-top"
              style={{
                display: items.length >= 18 ? 'flex' : 'none',
              }}
            >
              <div className="col-4" />
              <div className="col-8">
                <ImageWrapper
                  sourceType={SOURCE_TYP_PLACEHOLDER}
                  source={{
                    width: 1200,
                    height: 800,
                  }}
                  overlayElement={
                    <ContentfulMarkdownText
                      text="### Fokusthema 10"
                      styleClasses="h4"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex d-md-none">
          {this.props.items.map((item, i) => {
            if (i > 2 && i < 13) {
              return (
                <div className="col-12" key={'fokusthema-mobile-' + i}>
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    styleClasses="margin-20-top"
                    overlayElement={
                      <ContentfulMarkdownText
                        text={'### ' + item}
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
      </div>
    )
  }
}

export default FokusthemenPreview
