import React from 'react'

import HeroImageLayout from '../../components/layouts/HeroImageLayout'

import SiteHeaderContent from '../../components/SiteHeaderContent'
import LinkButton from '../../components/buttons/LinkButton'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../components/images/ImageWrapper'

class BeratungsfelderTemplate extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <div className="container-fluid no-gutters">
          <div className="row">
            <div className="col-md-12">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 2000,
                  height: 800,
                }}
              />
            </div>
          </div>
        </div>
        <div className="container margin-40-top">
          <div className="row">
            <div className="col-md-2">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 128,
                  height: 132,
                }}
              />
            </div>
          </div>
          <div className="row margin-40-top">
            <div className="col-md-7">
              <h1 className="h1">Fachberatung</h1>
              <h2 className="d-none d-md-block">
                Die Experten <br />für Kredit und Wertpapier
              </h2>
              <p className="d-block d-md-none">
                Die Experten für Kredit und Wertpapier
              </p>
              <p className="text-left margin-40-top margin-20-bottom margin-xs-20-top">
                {' '}
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
            </div>
            <div className="col-md-5">
              <LinkButton
                text="Kreditgeschäft"
                styleSpan="btn-lg btn-block margin-20-bottom margin-20-top"
              />
              <LinkButton
                text="Wertpapiergeschäft"
                styleSpan="btn-lg btn-block"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <p className="text-left margin-40-top margin-xs-40-top">
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
            </div>
            <div className="col-md-3" />
          </div>
        </div>
      </div>
    )
  }
}

export default BeratungsfelderTemplate
