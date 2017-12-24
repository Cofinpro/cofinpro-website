import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

import ContentfulImage from '../ContentfulImage'

class Facts extends React.Component {
    render() {
        const {
            fakt1Titel,
            fakt1Text,
            fakt1Image,
            fakt2Titel,
            fakt2Text,
            fakt2Image,
            fakt3Titel,
            fakt3Text,
            fakt3Image,
            fakt4Titel,
            fakt4Text,
            fakt4Image
        } = this.props
        const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row text-center">
                            <div className="col-6 col-md-3">
                                <ContentfulImage imageFile={fakt1Image} styleClasses="img-fluid img-md-padding" />
                                <p className="display-4">{fakt1Text}</p>
                                <p>{fakt1Titel}</p>
                            </div>
                            <div className="col-6 col-md-3">
                                <ContentfulImage imageFile={fakt2Image} styleClasses="img-fluid img-md-padding" />
                                <p className="display-4">{fakt2Text}</p>
                                <p>{fakt2Titel}</p>
                            </div>
                            <div className="col-6 col-md-3">
                                <ContentfulImage imageFile={fakt3Image} styleClasses="img-fluid img-md-padding" />
                                <p className="display-4">{fakt3Text}</p>
                                <p>{fakt3Titel}</p>
                            </div>
                            <div className="col-6 col-md-3">
                                <ContentfulImage imageFile={fakt4Image} styleClasses="img-fluid img-md-padding" />
                                <p className="display-4">{fakt4Text}</p>
                                <p>{fakt4Titel}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Facts
