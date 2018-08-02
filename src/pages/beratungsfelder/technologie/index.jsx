import React from 'react'

import RelevanteFokusthemen from '../../../components/RelevanteFokusthemen'
import ReferenzAndDownload from '../../../components/ReferenzAndDownload'
import FooterNavigation from '../../../components/FooterNavigation'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../../components/images/ImageWrapper'

class BeratungsfelderTechnologie extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid no-gutters">
          <div className="row">
            <div className="col-md-12">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                className="img-fluid margin-20-bottom margin-20-top"
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
              <h1 className="h1">Technologieberatung</h1>
              <h2 className="h2 margin-20-top">
                Wie sich IT und Zukunft<br />verbinden lassen
              </h2>
              <h4 className="h4 margin-40-top">
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
          <div className="row margin-120-top margin-xs-60-top">
            <div className="col-md-6">
              <h2 className="h2">
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
        </div>
        <div className="container">
          <div className="row margin-120-top justify-content-center">
            <div className="col-md-10">
              <h2 className="h2 text-primary text-center">Headline</h2>
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 2000,
                  height: 2000,
                }}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row margin-60-top">
            <div className="col-md-6">
              <h3>Lorem Ipsum Dolor Lorem Ipsum Dolor</h3>
            </div>
          </div>
          <div className="row margin justify-content-center">
            <div className="col-md-6">
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
            </div>
            <div className="col-md-6">
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
            </div>
          </div>
          <div className="row margin-140-top margin-xs-60-top">
            <div className="col-md-6">
              <h3 className="h3">Lorem Ipsum Dolor Lorem Ipsum Dolor</h3>
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 2000,
                  height: 600,
                }}
              />
              <p className="margin-xs-20-top">
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
          <div className="margin-120-top">
            <ReferenzAndDownload />
          </div>
          <div className="margin-140-top margin-xs-40-top">
            <FooterNavigation backButtonPath="/beratungsfelder" />
          </div>
        </div>
      </div>
    )
  }
}

export default BeratungsfelderTechnologie
