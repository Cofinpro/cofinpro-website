import React from 'react'

import ThreeIconsWithTextLayout from '../../../components/layouts/ThreeIconsWithTextLayout'
import LinkButton from '../../../components/buttons/LinkButton'
import {
  ImageWrapper,
  SOURCE_TYP_BOOTSTRAP,
} from '../../../components/images/ImageWrapper'

import './style.scss'

class StartseiteTemplate extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const text = 'hallo'
    const buttonText = 'MEHR'

    return (
      <div className="container margin-lg-top-bottom">
        <div className="row margin-80-top">
          <div className="col-7">
            <h1 className="h1">Beratungsfelder</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>

        <ThreeIconsWithTextLayout
          title={text}
          iconLeft={this.props.data.iconVorteilLinksSharp}
          textLeft={text}
          iconMiddle={this.props.data.iconVorteilMitteSharp}
          textMiddle={text}
          iconRight={this.props.data.iconVorteilRechtsSharp}
          textRight={text}
        />

        <div className="row margin-120-top">
          <div className="col-6">
            <ImageWrapper
              source="http://via.placeholder.com/600x350"
              sourceType={SOURCE_TYP_BOOTSTRAP}
            />
          </div>
          <div className="col-6">
            <h1 className="h2">Managementberatung</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
            <LinkButton text={buttonText} path="/jobs" />
          </div>
        </div>

        <div className="row margin-120-top">
          <div className="col-6">
            <h1 className="h2">Fachberatung</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
            <LinkButton text={buttonText} path="/jobs" />
          </div>
          <div className="col-6">
            <ImageWrapper
              source="http://via.placeholder.com/600x350"
              sourceType={SOURCE_TYP_BOOTSTRAP}
            />
          </div>
        </div>

        <div className="row margin-120-top">
          <div className="col-6">
            <ImageWrapper
              source="http://via.placeholder.com/600x350"
              sourceType={SOURCE_TYP_BOOTSTRAP}
            />
          </div>
          <div className="col-6">
            <h1 className="h2">Technologieberatung</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
            <LinkButton text={buttonText} path="/jobs" />
          </div>
        </div>
      </div>
    )
  }
}

export default StartseiteTemplate

export const pageQuery = graphql`
  query BeratungsfelderQuery {
    imageCool: imageSharp {
      sizes(maxWidth: 1600, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
    iconVorteilLinksSharp: imageSharp(
      id: { regex: "/ZEiMMpHD0Ium86MUc6oi0/" }
    ) {
      sizes(quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
    iconVorteilMitteSharp: imageSharp(
      id: { regex: "/c14zZzUPkdQy4gMImWEWAMS/" }
    ) {
      sizes(quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
    iconVorteilRechtsSharp: imageSharp(
      id: { regex: "/c6jYnfcyIh2Q4Mm4YMiI822/" }
    ) {
      sizes(quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
