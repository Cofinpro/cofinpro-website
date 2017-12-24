import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

import ContentfulImage from '../ContentfulImage'

class SiteHeader extends React.Component {
    render() {
        const { title, imageFile, imageSmall, titleTag } = this.props



        return (
            <div className="container margin-lg-top-bottom">
                <div className="row">
                    <div className="col">
                        <div className="title-box">
                            <div className="col-11 col-md-9">
                                {titleTag !== null && titleTag === 'h1' ?
                                <h1 className="h2">{title}</h1>
                                :
                                <h3 className="h2">{title}</h3>
                                }
                            </div>
                            <div className="col-1 col-md-3"></div>
                        </div>
                    </div>
                </div>
                {imageSmall !== null ? 
                <div className="row">
                    <div className="col">
                        <ContentfulImage imageFile={imageFile} styleClasses="img-fluid d-none d-md-block" />
                        <ContentfulImage imageFile={imageSmall} styleClasses="img-fluid d-block d-md-none" />
                    </div>
                </div> :
                <div className="row">
                    <div className="col">
                        <ContentfulImage imageFile={imageFile} />
                    </div>
                </div>}
            </div>
        )
    }
}

export default SiteHeader
