import React from 'react'

import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'

import starUrl, {
  ReactComponent as TestIcon,
} from '../../../static/svg/Fokusthemen_Trendthemen/schwarz/anlegerschutz.svg'

import {
  ImageWrapper,
  SOURCE_TYP_ICON_IMAGE,
} from '../../components/images/ImageWrapper'

class Test extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ImageWrapper
                sourceType={SOURCE_TYP_ICON_IMAGE}
                source={<TestIcon />}
                style={{
                  backgroundImage: '',
                  iconColor: 'icon-image--blue',
                  overlay: '',
                  border: 'border-img-svg--blue',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Test
