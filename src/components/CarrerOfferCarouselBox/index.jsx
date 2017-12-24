import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import PubSub from 'pubsub-js';

import CarrerOfferPreview from '../CarrerOfferPreview'

import CarrerOffersCarousel from '../CarrerOffersCarousel'

import StorageHelper from '../../utils/storageHelper'

class CarrerOfferCarouselBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            perspektive: StorageHelper.getFromSessionStorage('perspective')
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
            })
        }
    }

    render() {
        const { id, titel, stellenAnzeigen, buttonText, blacklistedItem} = this.props

        const pathPrefix = process.env.NODE_ENV === 'development'
            ? ''
            : __PATH_PREFIX__

        if(this.state.perspektive != null && this.state.perspektive === 'andere') {
            return (<div className="text-center">
            <p className="h4">Noch nicht Deinen Wunschjob gefunden? Kein Problem.</p>
            <a className="padding-sm-top" target="_blank" href="https://recruitingapp-2586.umantis.com/Vacancies/297/Application/CheckLogin/1?lang=ger">
            <span className="btn btn btn-outline-primary">INITIATIV BEI COFINPRO BEWERBEN</span>
        </a>
            </div>);
        } else {
            return (
                <div>
                            <div className="row">
                            <div className="col text-center">
                                <p className="h3">{titel}</p>
                            </div>
                        </div>


                         <div className="row">
                             <div className="col d-block d-md-none">
                                 <CarrerOffersCarousel id="jobs_sm" itemPerSlideLimiter="1" itemsData={stellenAnzeigen} blacklistedItem={blacklistedItem} {...this.props} />
                             </div>
                             <div className="col d-none d-md-block d-lg-none">
                                 <CarrerOffersCarousel id="jobs_md" itemPerSlideLimiter="2" itemsData={stellenAnzeigen} blacklistedItem={blacklistedItem} {...this.props} />
                             </div>
                             <div className="col d-none d-lg-block">
                                 <CarrerOffersCarousel id="jobs_lg" itemPerSlideLimiter="3" itemsData={stellenAnzeigen} blacklistedItem={blacklistedItem} {...this.props} />
                             </div>
                         </div>

                        <div className="row">
                        <div className="col text-center">
                            <Link className="readmore" to={pathPrefix + "/jobs"}>
                                <span className="btn btn btn-outline-primary">{buttonText}</span>
                            </Link>
                        </div>
                        </div>
                        </div>
                     )
        }


    }
}

export default CarrerOfferCarouselBox
