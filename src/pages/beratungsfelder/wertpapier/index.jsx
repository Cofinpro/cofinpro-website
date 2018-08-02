import React from 'react'

import RelevanteFokusthemen from '../../../components/RelevanteFokusthemen'
import ReferenzAndDownload from '../../../components/ReferenzAndDownload'
import FooterNavigation from '../../../components/FooterNavigation'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../../components/images/ImageWrapper'

class BeratungsfelderWertpapierTemplate extends React.Component {
  render() {
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
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img
                src="http://via.placeholder.com/128x132"
                alt="placeholder"
                className="img-fluid margin-20-bottom margin-20-top"
              />
              <h1 className="h1">Wertpapiergeschäft</h1>
              <h2 className="h2 margin-20-top">
                Fachberatung im<br />Wertpapierumfeld
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
          <div className="row margin-120-top margin-xs-40-top">
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
          <div className="row margin-120-top margin-xs-20-top">
            <div className="col-md-12">
              <h2 className="h2 text-primary text-center">Wertpapierprozess</h2>
              <img
                src="http://via.placeholder.com/937x90"
                alt="placeholder"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row margin-80-top margin-xs-20-top">
            <div className="col-md-12">
              <h2 className="h2 text-primary text-center">Investmentprozess</h2>
              <img
                src="http://via.placeholder.com/937x90"
                alt="placeholder"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row margin-100-top margin-xs-40-top">
            <div className="col-md-6" />
            <div className="col-md-6">
              <h2 className="h2">
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
          <div className="row margin-60-top margin-xs-20-top">
            <div className="col-md-5">
              <h3 className="h3">
                Mit besonderer Expertise und<br />
                Praxiserfahrung berät Cofinpro<br />
                Sie in den Themen:
              </h3>
            </div>
            <div className="col-md-7" />
          </div>
          <div className="row ">
            <div className="col-md-6 margin-100-top margin-xs-40-top">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
              />
              <div className="row margin-40-top margin-xs-20-top">
                <div className="col-12 col-md-8">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                  />
                </div>
              </div>
              <div className="col-12 col-md-4" />
            </div>
            <div className="col-md-6">
              <div className="row margin-xs-20-top">
                <div className="col-md-2" />
                <div className="col-12 col-md-8">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                  />
                </div>
                <div className="col-md-2" />
              </div>
              <div className="row margin-40-top margin-xs-20-top">
                <div className="col-12">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-end negative-margin-40-top margin-xs-20-top">
            <div className="col-12 col-md-5">
              <div className="row">
                <div className="col-md-2" />
                <div className="col-12 col-md-10">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row margin-xs-20-top">
                <div className="col-md-10">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
          <div className="margin-100-top margin-xs-40-top">
            <ReferenzAndDownload />
          </div>
        </div>
      </div>
    )
  }
}

export default BeratungsfelderWertpapierTemplate
