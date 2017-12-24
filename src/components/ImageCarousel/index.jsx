import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

import ContentfulImage from '../ContentfulImage'

class ImageCarousel extends React.Component {
    render() {
        const {
            carouselId,
            contentfulImages
        } = this.props

        const pathPrefix = process.env.NODE_ENV === 'development'
            ? ''
            : __PATH_PREFIX__

        if (contentfulImages != null && contentfulImages.length > 0) {
            return (
                <div id={"carousel-" + carouselId} className="carousel slide imageCarousel" data-ride="carousel">
                    <div className="carousel-inner">
                        {contentfulImages.map((image, i) => {
                            return (
                                <div className={"carousel-item" + (i == 0 ? " active" : "")} key={"carousel-item-" + i}>
                                    <ContentfulImage imageFile={image} styleClasses="d-block w-100" key={"carousel-item-image-" + i} />
                                </div>
                            )
                        })}
                    </div>
                    <a className="carousel-control-prev" href={"#carousel-" + carouselId} role="button" data-slide="prev">
                        <i className="fa fa-chevron-left text-primary" aria-hidden="true"></i>
                    </a>
                    <a className="carousel-control-next" href={"#carousel-" + carouselId} role="button" data-slide="next">
                        <i className="fa fa-chevron-right text-primary" aria-hidden="true"></i>
                    </a>
                </div>
            )
        } else {
            return null;
        }

    }
}

export default ImageCarousel
