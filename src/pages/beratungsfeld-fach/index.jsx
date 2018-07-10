import React from 'react'

import HeroImageLayout from '../../components/layouts/HeroImageLayout'

import SiteHeaderContent from '../../components/SiteHeaderContent'
import LinkButton from '../../components/buttons/LinkButton'

class BeratungsfelderTemplate extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <div className="container">
          <div className="container-fluid no-padding">
            <div className="row">
              <div className="col-md-12">
                <img
                  src="http://via.placeholder.com/1024x584"
                  alt="placeholder"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img
                src="http://via.placeholder.com/128x132"
                alt="placeholder"
                className="img-fluid margin-20-bottom margin-20-top"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <h1>Fachberatung</h1>
              <h2>
                Die Experten <br />für Kredit und Wertpapier
              </h2>
              <p className="text-left margin-40-top">
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
            <div className="col-5">
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
            <div className="col-3" />
            <div className="col-6">
              <p className="text-left margin-20-top">
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
            <div className="col-3" />
          </div>
        </div>
      </div>
    )
  }
}

export default BeratungsfelderTemplate
