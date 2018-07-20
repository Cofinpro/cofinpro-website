import React from 'react'

import ThreeIconsWithLinks from '../../components/layouts/ThreeIconsWithLinks'
import LinkButton from '../../components/buttons/LinkButton'
import {
  ImageWrapper,
  SOURCE_TYP_BOOTSTRAP,
} from '../../components/images/ImageWrapper'

class BeratungsfelderStartseite extends React.Component {
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

    const buttonLinkText = 'MEHR'

    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-7">
              <h1 className="h1">Beratungsfelder</h1>
              <p className="h4 margin-20-top d-md-block d-none">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetu
              </p>
              <p className="d-md-none">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetu
              </p>
            </div>
          </div>
        </div>

        <ThreeIconsWithLinks
          styleClass="margin-100-top"
          iconLeft={this.props.data.iconVorteilLinksSharp}
          titleLeft={'Managementberatung'}
          iconMiddle={this.props.data.iconVorteilMitteSharp}
          titleMiddle={'Fachberatung'}
          iconRight={this.props.data.iconVorteilRechtsSharp}
          titleRight={'Technologieberatung'}
        />

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <ImageWrapper
                source="http://via.placeholder.com/600x350"
                sourceType={SOURCE_TYP_BOOTSTRAP}
              />
            </div>
            <div className="col-12 col-md-6 margin-xs-20-top">
              <h1 className="h2">Managementberatung</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
              <LinkButton
                styleSpan="w-100 w-md-unset"
                text={buttonLinkText}
                path="/jobs"
              />
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 d-md-none">
              <ImageWrapper
                source="http://via.placeholder.com/600x350"
                sourceType={SOURCE_TYP_BOOTSTRAP}
              />
            </div>
            <div className="col-12 col-md-6 margin-xs-20-top">
              <h1 className="h2">Fachberatung</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
              <LinkButton
                styleSpan="w-100 w-md-unset"
                text={buttonLinkText}
                path="/beratungsfelder/fach"
              />
            </div>
            <div className="col-md-6 d-md-block d-none">
              <ImageWrapper
                source="http://via.placeholder.com/600x350"
                sourceType={SOURCE_TYP_BOOTSTRAP}
              />
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <ImageWrapper
                source="http://via.placeholder.com/600x350"
                sourceType={SOURCE_TYP_BOOTSTRAP}
              />
            </div>
            <div className="col-12 col-md-6 margin-xs-20-top">
              <h1 className="h2">Technologieberatung</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
              <LinkButton
                styleSpan="w-100 w-md-unset"
                text={buttonLinkText}
                path="/beratungsfelder/technologie"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BeratungsfelderStartseite

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
