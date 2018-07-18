import React from 'react'

import HeroImageLayout from '../../components/layouts/HeroImageLayout'

import SiteHeaderContent from '../../components/SiteHeaderContent'
import RelevanteFokusthemen from '../../components/RelevanteFokusthemen'

import ReferenzAndDownload from '../../components/ReferenzAndDownload'

import FooterNavigation from '../../components/FooterNavigation'

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
            <div className="col-md-md-12">
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
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img
                src="http://via.placeholder.com/128x132"
                alt="placeholder"
                className="img-fluid margin-20-bottom margin-20-top"
              />
              <h1>Wertpapiergeschäft</h1>
              <h2 className="margin-20-top">
                Fachberatung im<br />Wertpapierumfeld
              </h2>
              <h4 className="margin-40-top">
                Unsere erfahrenen Berater verbinden ihre <br />
                langjährige Erfahrung im Wertpapiergeschäft <br />
                mit methodischem Wissen und einer hohen <br />
                projektmanagmentkompetenz.
              </h4>
            </div>

            <div className="col-md-4">
              <RelevanteFokusthemen />
            </div>
          </div>
          <div className="row margin-120-top">
            <div className="col-md-6">
              <h2>
                LOREM IPSUM dolor <br />
                sit amet lorem ipsum
              </h2>
              <p className="text-left margin-20-top">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              </p>
            </div>
          </div>
          <div className="row margin-120-top">
            <div className="col-md-12">
              <h2 className="text-primary text-center">Wertpapierprozess</h2>
              <img
                src="http://via.placeholder.com/937x90"
                alt="placeholder"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row margin-80-top">
            <div className="col-md-12">
              <h2 className="text-primary text-center">Investmentprozess</h2>
              <img
                src="http://via.placeholder.com/937x90"
                alt="placeholder"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row margin-100-top">
            <div className="col-md-6" />
            <div className="col-md-6">
              <h2>
                LOREM IPSUM dolor <br />
                sit amet lorem ipsum
              </h2>
              <p className="text-left margin-20-top">
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
              <p className="text-left margin-20-top">
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
          </div>
          <div className="row margin-60-top">
            <div className="col-md-6">
              <h3>
                Mit besonderer Expertise und<br />
                Praxiserfahrung berät Cofinpro<br />
                Sie in den Themen:
              </h3>
              <img
                src="http://via.placeholder.com/448x267"
                alt="placeholder"
                className="img-fluid margin-100-top"
              />
              <img
                src="http://via.placeholder.com/288x172"
                alt="placeholder"
                className="img-fluid margin-40-top"
              />
              <div className="row">
                <div className="col-md-2" />
                <div className="col-md-10">
                  <img
                    src="http://via.placeholder.com/288x172"
                    alt="placeholder"
                    className="img-fluid margin-40-top"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 margin-140-top">
              <img
                src="http://via.placeholder.com/288x172"
                alt="placeholder"
                className="mx-auto d-block margin-40-top"
              />
              <img
                src="http://via.placeholder.com/448x267"
                alt="placeholder"
                className="mx-auto d-block margin-40-top"
              />

              <img
                src="http://via.placeholder.com/448x267"
                alt="placeholder"
                className="mx-auto d-block margin-40-top"
              />
            </div>
          </div>
          <div className="margin-100-top">
            <ReferenzAndDownload />
          </div>
        </div>
        <div className="margin-140-top">
          <FooterNavigation />
        </div>
      </div>
    )
  }
}

export default BeratungsfelderTemplate
