import React from 'react';
import { Link } from 'gatsby';

import { ImageWrapper, SourceTyp } from '../images/ImageWrapper';

interface Props {
  url: string;
  header: string;
  subheader: string;
  color: string;
  icon: any;
}

class FokusthemaPreview extends React.Component<Props> {
  render() {
    const { url, header, subheader, color, icon } = this.props;
    return (
      <Link to={`/fokusthemen/thema/${url}`}>
        <ImageWrapper
          sourceType={SourceTyp.Icon}
          source={icon}
          style={{
            container: color,
          }}
          overlayElement={
            <div>
              <h3 className="h4 d-none d-lg-block no-margin bold-font">{header}</h3>
              <p className="h5 d-block d-lg-none no-margin bold-font">{header}</p>
              {subheader !== undefined && <p className="text-sm-small">{subheader}</p>}
            </div>
          }
        />
      </Link>
    );
  }
}

export default FokusthemaPreview;
