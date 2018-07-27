import React from 'react'

import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'

import {
  ImageWrapper,
  SOURCE_TYP_ICON_IMAGE,
} from '../../components/images/ImageWrapper'

class Test extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid no-gutters">
          <div className="row">
            <div className="col-6">
              <ImageWrapper
                sourceType={SOURCE_TYP_ICON_IMAGE}
                source={
                  '/svg/Fokusthemen_Trendthemen/schwarz/anlegerschutz.svg'
                }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Test
