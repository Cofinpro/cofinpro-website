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
            <div className="col-12">
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
              <h1>Technologieberatung</h1>
              <h2 className="margin-20-top">
                Wie sich IT und Zukunft<br />verbinden lassen
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
          <div className="container-fluid no-gutters">
            <div className="row margin-120-top">
              <div className="col-md-12">
                <h2 className="text-primary text-center">Wertpapierprozess</h2>
                <ImageWrapper
                  sourceType={SOURCE_TYP_PLACEHOLDER}
                  source={{
                    width: 2000,
                    height: 200,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BeratungsfelderTemplate
