import React from 'react'

import RelevanteFokusthemen from '../../../components/RelevanteFokusthemen'
import ReferenzAndDownload from '../../../components/ReferenzAndDownload'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../../components/images/ImageWrapper'

class BeratungsfelderManagementTemplate extends React.Component {
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
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img
                src="http://via.placeholder.com/128x132"
                alt="placeholder"
                className="img-fluid margin-20-bottom margin-20-top"
              />
              <h1 className="h1">Managementberatung</h1>
              <h2 className="h2 margin-20-top">
                Wie wir Geschäftsmodelle gestalten und optimieren
              </h2>
              <h4 className="h4 margin-40-top">
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
              </h4>
            </div>
            <div className="col-md-4">
              <RelevanteFokusthemen />
            </div>
          </div>
        </div>
        <div className="container margin-120-top margin-xs-40-top">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h2">TrendThemen</h2>
              <p className="margin-20-top">
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
              <div className="margin-120-top margin-xs-40-top">
                <ImageWrapper
                  sourceType={SOURCE_TYP_PLACEHOLDER}
                  source={{
                    width: 2000,
                    height: 1500,
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 margin-xs-20-top">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 2000,
                  height: 1500,
                }}
              />
              <div className="row margin-20-top">
                <div className="col-md-8 align-items-end">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 2000,
                      height: 1000,
                    }}
                  />
                </div>
              </div>
              <div className="margin-40-top margin-xs-20-top">
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
        </div>
        <div className="container">
          <div className="row margin-80-top">
            <div className="col-md-6">
              <h2 className="h2"> Lorem Ipsum dolor</h2>
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
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 2000,
                  height: 1500,
                }}
              />
            </div>
          </div>
        </div>
        <div className="margin-120-top margin-xs-40-top">
          <ReferenzAndDownload />
        </div>
      </div>
    )
  }
}

export default BeratungsfelderManagementTemplate
