import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

import ContentfulImage from '../ContentfulImage'
import ContentfulMarkdownText from '../ContentfulMarkdownText'

class ContentBoxStyleOne extends React.Component {
    render() {
        const {title, subtitle, image, paragraphs} = this.props

        const pathPrefix = process.env.NODE_ENV === 'development'
            ? ''
            : __PATH_PREFIX__

        function CreateImage(props) {
            if (typeof props.image !== 'undefined') {
                return <ContentfulImage imageFile={image} styleClasses="img-fluid padding-sm-bottom"/>;
            } else {
                return null;
            }
        }

        return (
            <div>
                <h2 className="h6">{subtitle}</h2>
                <h3 className="h2">{title}</h3>
                <CreateImage {...this.props}/> 
                {paragraphs.length > 0 ? paragraphs.map((paragraph, i) => {
                            return (
                                <ContentfulMarkdownText key={"ContentfulMarkdownText-" + i} text={paragraph} />
                            );
                        })
                    : null}
            </div>
        )
    }
}

export default ContentBoxStyleOne
