import React from 'react';
import Img from 'gatsby-image';
import PubSub from 'pubsub-js';

import ContentfulMarkdownText from '../ContentfulMarkdownText';
import CarouselControlPrevNext from '../CarouselControlPrevNext';
import StorageHelper from 'utils/storageHelper';

import './SocialMediaCarousel.scss';

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

  subscriber(msg: any, data: any) {
    if (this.state.perspektive !== data) {
      this.setState({
        perspektive: data,
      });
    }
  }

  render() {
    const { carouselId, socialMediaPosts, sharpImages } = this.props;

    let filteredSocialMediaPosts = [];
    if (this.state.perspektive === null || this.state.perspektive.trim().length < 1) {
      filteredSocialMediaPosts = socialMediaPosts.edges.map((x: any) => x.node);
    } else {
      filteredSocialMediaPosts = socialMediaPosts.edges
        .filter((x: any) => x.node.perspektiven.some((y: any) => y.name === this.state.perspektive))
        .map((x: any) => x.node);
    }

    if (filteredSocialMediaPosts.length > 0) {
      return (
        <div>
          <div id={`carousel-${carouselId}`} className="carousel  socialMediaCarousel" data-ride="carousel">
            <div className="carousel-inner">
              {filteredSocialMediaPosts.map((mediaPost: any, index: number) => {
                const imageSharp = sharpImages.find(x => x.sizes.originalName.indexOf(mediaPost.bildDesPosts.id) !== -1);

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
