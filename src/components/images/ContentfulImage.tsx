import React from 'react';

interface Props {
  imageFile: any;
  styleClasses: any;
}

class ContentfulImage extends React.Component<Props> {
  render() {
    const { imageFile, styleClasses } = this.props;
    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;

    if (imageFile == null || imageFile.file == null) {
      return null;
    }

    const fileEnding = imageFile.file.fileName.substring(imageFile.file.fileName.lastIndexOf('.'), imageFile.file.fileName.length);
    const filePath = `${pathPrefix}/img/contentful/${imageFile.id}${fileEnding}`;

    return (
      <img
        src={filePath}
        className={styleClasses == null ? 'img-fluid' : styleClasses}
        alt={imageFile == null ? '' : imageFile.description}
      />
    );
  }
}

export default ContentfulImage;
