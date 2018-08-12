import React from 'react'

import ExternalLinkButton from '../../components/buttons/ExternalLinkButton'
import RelevanteFokusthemen from '../../components/RelevanteFokusthemen'
import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'

import ContentMaxParagraph from './ContentMaxParagraph'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../components/images/ImageWrapper'

class ContentseiteMax extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="h1">Contentseite Maximal</h1>
              <h2 className="h2">
                Unterthema (News und Media) Blog Project Contenseite
              </h2>
              <p className="margin-60-top margin-xs-20-top">12.01.2018</p>
              <p className="h4 bold-font d-none d-md-block">
                Genda excerum solecusam, venim atur sit illibus anditat harum
                aligendae ratur sus ducid et odigniscilis dolori di seceper
                roriber iaspidundaes volent repedit fuga. Nam esti conse landi
                quiamus incillam, atur aliberr oreperio.
              </p>
              <p className="d-block d-md-none">
                Genda excerum solecusam, venim atur sit illibus anditat harum
                aligendae ratur sus ducid et odigniscilis dolori di seceper
                roriber iaspidundaes volent repedit fuga. Nam esti conse landi
                quiamus incillam, atur aliberr oreperio.
              </p>
            </div>
            <div className="col-12 col-md-2" />
            <div className="col-12 col-md-4">
              <RelevanteFokusthemen />
            </div>
          </div>
        </div>

        <div className="container margin-100-top margin-xs-60-top">
          <div className="row">
            <div className="col-12 align-items-center">
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

        <ContentMaxParagraph
          content={{
            header: 'Subheader',
            text:
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            orderText: 'order-md-1',
            orderPicture: 'order-md-2',
          }}
          style={{ container: 'margin-120-top margin-xs-80-top' }}
        />

        <ContentMaxParagraph
          content={{
            header: 'Subheader',
            text:
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            orderText: 'order-md-2',
            orderPicture: 'order-md-1',
          }}
          style={{ container: 'margin-100-top margin-xs-80-top' }}
        />

        <ContentMaxParagraph
          content={{
            header: 'Subheader',
            text:
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            orderText: 'order-md-1',
            orderPicture: 'order-md-2',
          }}
          style={{ container: 'margin-100-top margin-xs-80-top' }}
        />

        <div className="container margin-100-top margin-xs-60-top">
          <div className="row">
            <div className="col-12 text-center">
              <p>Download Text</p>
              <ExternalLinkButton
                text={'DOWNLOAD'}
                _href={'#'}
                _target={'_blank'}
                styleSpan="w-100 w-md-unset"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContentseiteMax
