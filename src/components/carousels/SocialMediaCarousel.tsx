import React from 'react';
import Img from 'gatsby-image';
import PubSub from 'pubsub-js';

import ContentfulMarkdownText from '../ContentfulMarkdownText';
import CarouselControlPrevNext from '../CarouselControlPrevNext';
import StorageHelper from 'utils/storageHelper';

interface Props {
  carouselId: string;
  socialMediaPosts: any;
  sharpImages: any[];
}

interface State {
  perspektive: any;
}

class SocialMediaCarousel extends React.Component<Props, State> {
  private token: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      perspektive: StorageHelper.getFromSessionStorage('perspective'),
    };
  }

  componentWillMount() {
    this.token = PubSub.subscribe('perspectiveChange', this.subscriber.bind(this));
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  subscriber(msg, data) {
    if (this.state.perspektive !== data) {
      this.setState({
        perspektive: data,
      });
    }
  }

  render() {
    const { carouselId, socialMediaPosts, sharpImages } = this.props;

    const filteredSocialMediaPosts = [];

    for (let i = 0; i < socialMediaPosts.edges.length; i++) {
      const perspektiven = [];

      for (let j = 0; j < socialMediaPosts.edges[i].node.perspektiven.length; ++j) {
        perspektiven.push(socialMediaPosts.edges[i].node.perspektiven[j].name);
      }

      if (
        this.state.perspektive === null ||
        this.state.perspektive.trim().length < 1 ||
        perspektiven.indexOf(this.state.perspektive) > -1
      ) {
        filteredSocialMediaPosts.push(socialMediaPosts.edges[i].node);
      }
    }

    if (filteredSocialMediaPosts.length > 0) {
      return (
        <div>
          <div id={`carousel-${carouselId}`} className="carousel  socialMediaCarousel" data-ride="carousel">
            <div className="carousel-inner">
              {filteredSocialMediaPosts.map((mediaPost, index) => {
                let imageSharp;

                for (let j = 0; j < sharpImages.length; j++) {
                  if (sharpImages[j].sizes.originalName.indexOf(mediaPost.bildDesPosts.id) !== -1) {
                    imageSharp = sharpImages[j];
                  }
                }

                return (
                  <div className={`text-center carousel-item ${index === 0 ? ' active' : ''}`} key={`carousel-item-${index}-${carouselId}`}>
                    <a href={mediaPost.urlDesPosts.urlDesPosts} target="_blank" rel="noopener">
                      <Img sizes={imageSharp.sizes} />
                    </a>
                    <ContentfulMarkdownText
                      text={mediaPost.textDesPosts.textDesPosts}
                      styleClasses="d-block w-75 mx-auto p-font-large-md"
                    />
                  </div>
                );
              })}
            </div>
            <CarouselControlPrevNext sliderId={`carousel-${carouselId}`} />
          </div>
        </div>
      );
    }

    return null;
  }
}

export default SocialMediaCarousel;
