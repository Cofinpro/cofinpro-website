import React from 'react'

class TestimonialLargeLayout extends React.Component {
  render() {
    const {
      title,
      image,
      text,
      author,
      authorTitle,
      videoUrl,
      imageFile,
    } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-1" />
          <div className="col-12 col-md-11">
            <p className="h6 margin-20-bottom">{title}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-1" />
          <div className="col-12 col-md-5">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="Testimonial eines Mitarbeiters"
                className="embed-responsive-item"
                src={videoUrl.replace('/watch?v=', '/embed/')}
                allowFullScreen
              />
            </div>
          </div>
          <div className="col-12 col-md-5">
            <p className="h4 margin-20-bottom">{text}</p>
            <p className="p-font-large-md">
              {author} - {authorTitle}
            </p>
          </div>
          <div className="col-12 col-md-1" />
        </div>
      </div>
    )
  }
}

export default TestimonialLargeLayout
