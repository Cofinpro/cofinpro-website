import React from 'react'

import RelevanteFokusthemen from '../../../components/RelevanteFokusthemen'
import ReferenzAndDownload from '../../../components/ReferenzAndDownload'
import ContentfulMarkdownText from '../../../components/ContentfulMarkdownText'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../../components/images/ImageWrapper'

class BeratungsfelderKreditTemplate extends React.Component {
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

        <div className="container margin-40-top">
          <div className="row">
            <div className="col-md-8">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 128,
                  height: 132,
                }}
              />
            </div>
          </div>
        </div>
        <div className="container margin-40-top">
          <div className="row">
            <div className="col-8">
              <h1 className="h1">Kreditgeschäft</h1>
              <h2 className="margin-20-top d-none d-md-block">
                Fachberatung im Kreditgeschäft
              </h2>
              <p className="d-block d-md-none">
                Fachberatung im Kreditgeschäft
              </p>
              <h4 className="margin-40-top d-none d-md-block">
                Cofinpro setzt mit Ihnen überzeugende Lösungen für das
                Kreditgeschäft von Morgen um.
              </h4>
              <p className="d-block d-md-none">
                Cofinpro setzt mit Ihnen überzeugende Lösungen für das
                Kreditgeschäft von Morgen um.
              </p>
            </div>

            <div className="col-md-4">
              <RelevanteFokusthemen />
            </div>
          </div>
        </div>
        <div className="container margin-140-top margin-xs-60-top">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h2">LOREM IPSUM dolor sit amet lorem ipsum</h2>
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
        </div>
        <div className="container">
          <div className="row margin-140-top margin-xs-100-top">
            <div className="col-12">
              <h2 className="text-primary text-center">Kreditprozess</h2>
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
        <div className="container">
          <div className="row margin-120-top margin-xs-80-top">
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
        </div>

        <div className="container">
          <div className="row margin-40-top">
            <div className="col-12 col-md-5 ">
              <h3 className="h2">
                Mit besonderer Expertise und Praxiserfahrung berät Cofinpro Sie
                in den Themen:
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 margin-100-top margin-xs-20-top">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
                overlayElement={
                  <ContentfulMarkdownText
                    text="###Fokusthema 3"
                    styleClasses="h4"
                  />
                }
              />
              <div className="row margin-40-top margin-xs-20-top">
                <div className="col-12 col-md-8">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="###Fokusthema 4"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row margin-xs-20-top justify-content-center">
                <div className="col-12 col-md-8">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="###Fokusthema 2"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
              <div className="row margin-40-top margin-xs-20-top">
                <div className="col-12">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="###Fokusthema 1"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div />
        </div>
        <div className="container margin-100-top">
          <ReferenzAndDownload />
        </div>
      </div>
    )
  }
}

export default BeratungsfelderKreditTemplate
