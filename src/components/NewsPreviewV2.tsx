import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import ContentfulImage from './images/ContentfulImage';

import './NewsPreviewV2.scss';
import { SharpImage } from 'models/SharpImage';

interface Props {
  createdAt: any;
  description: string;
  url: string;
  imageFile: any;
  imageFileSharp: SharpImage;
}

class NewsPreviewV2 extends React.Component<Props> {
  render() {
    const { createdAt, description, url, imageFile, imageFileSharp } = this.props;

    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;

    return (
      <div>
        <Link to={`${pathPrefix}/karriere/pinnwand/${url}`}>
          {imageFileSharp !== undefined && imageFileSharp !== null ? (
            <Img fluid={imageFileSharp != null && imageFileSharp.sizes} />
          ) : (
            <ContentfulImage imageFile={imageFile} styleClasses="img-fluid" />
          )}
        </Link>
        <p className="news-content margin-20-top">
          <span className="news-date">{createdAt}</span>
          <br />
        </p>
        <p className="news-text">
          {description.length > 200 ? `${description.substring(0, 200)}...` : description}
          &nbsp;
          <Link to={`${pathPrefix}/karriere/pinnwand/${url}`}>></Link>
        </p>
      </div>
    );
  }
}

export default NewsPreviewV2;
