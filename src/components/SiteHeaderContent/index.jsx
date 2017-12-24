import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

import ContentfulMarkdownText from '../ContentfulMarkdownText'

class SiteHeaderContent extends React.Component {
    render() {
        const { title, subtitle, text1, text2, titleTag, subtitleTag } = this.props

        return (
            <div className="container padding-md-top-bottom">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 text-center">
                        {subtitleTag !== null && subtitleTag === 'h3' ? 
                            <h3 className="h6">{subtitle}</h3>
                            : 
                            <h1 className="h6">{subtitle}</h1>
                            }
                        
                        <h2>{title}</h2>
                        <ContentfulMarkdownText text={text1} />
                        <ContentfulMarkdownText text={text2} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SiteHeaderContent
