import React from 'react'
import Link from 'gatsby-link'
import PubSub from 'pubsub-js'

import StorageHelper from '../../../utils/storageHelper'

import './style.scss'

import Kompetenzen from '../../../../data/Kompetenzen'

class MenuCompetence extends React.Component {

    componentDidMount() {

        $(document).on('click', '#nav-menu-competence.show', function (e) {
            if ($(e.target).is('a')) {
                $(this).collapse('hide')
            }
        })

    }

    savePerspective(perspective) {
        StorageHelper.saveInSessionStorage('perspective', perspective)
        this.setState({ perspective: perspective })
        PubSub.publish('perspectiveChange', perspective)
    }

    constructor(props) {
        super(props)
        this.state = {
            perspective: StorageHelper.getFromSessionStorage('perspective'),
        }

        this.perspectives = []

        for (var i = 0; i < Kompetenzen.data.length; ++i) {
            this.perspectives.push(Kompetenzen.data[i].id)
        }
    }

    getPathPrefixPerspective() {
        const pathPrefix =
            process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

        if (
            this.getPerspective() === undefined ||
            this.getPerspective().length === 0
        ) {
            return pathPrefix
        } else {
            return pathPrefix + '/' + this.getPerspective()
        }
    }

    getPerspective() {
        if (typeof localStorage !== 'undefined') {
            if (StorageHelper.getFromSessionStorage('perspective').length > 0) {
                return '' + StorageHelper.getFromSessionStorage('perspective')
            } else {
                return ''
            }
        }
    }

    render() {
        const pathPrefix =
            process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

        const { location, locationUpdate } = this.props

        var urlFragmentPers = pathPrefix != null && pathPrefix.length > 2 ? 1 : 0

        var mainUrl = pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/'

        return (
            <div
                className="collapse"
                id="nav-menu-competence"
                hidden={locationUpdate === mainUrl ? true : false}
            >
                <p className="d-block text-white h5 padding-sm-bottom">
                    DEINE KOMPETENZ
                </p>
                <ul className="navbar-nav mr-auto text-dark">
                    <li>
                        <p className="h6">FACHBERATER</p>
                    </li>
                    <li
                        className={
                            StorageHelper.getFromSessionStorage('perspective').match(
                                'fachlicher-absolvent'
                            )
                                ? 'nav-item h6 active'
                                : 'nav-item h6'
                        }
                    >
                        <Link
                            to={
                                location.pathname.slice(1).split('/').length > 0 &&
                                    this.perspectives.indexOf(
                                        location.pathname.slice(1).split('/')[urlFragmentPers]
                                    ) > -1
                                    ? 'fachlicher-absolvent/' +
                                    location.pathname.slice(1).split('/')[urlFragmentPers + 1]
                                    : location.pathname
                            }
                            onClick={() => this.savePerspective('fachlicher-absolvent')}
                            className="nav-link"
                        >
                            > Absolvent & Young Professional
                        </Link>
                    </li>
                    <li
                        className={
                            StorageHelper.getFromSessionStorage('perspective').match(
                                'fachlicher-professional'
                            )
                                ? 'nav-item h6 active'
                                : 'nav-item h6'
                        }
                    >
                        <Link
                            to={
                                location.pathname.slice(1).split('/').length > 0 &&
                                    this.perspectives.indexOf(
                                        location.pathname.slice(1).split('/')[urlFragmentPers]
                                    ) > -1
                                    ? 'fachlicher-professional/' +
                                    location.pathname.slice(1).split('/')[urlFragmentPers + 1]
                                    : location.pathname
                            }
                            onClick={() => this.savePerspective('fachlicher-professional')}
                            className="nav-link"
                        >
                            > Professional
                        </Link>
                    </li>
                    <li>
                        <span className="text-white h6">/</span>
                    </li>
                    <li>
                        <p className="h6">TECHNOLOGISCHER BERATER</p>
                    </li>
                    <li
                        className={
                            StorageHelper.getFromSessionStorage('perspective').match(
                                'technologischer-absolvent'
                            )
                                ? 'nav-item h6 active'
                                : 'nav-item h6'
                        }
                    >
                        <Link
                            to={
                                location.pathname.slice(1).split('/').length > 0 &&
                                    this.perspectives.indexOf(
                                        location.pathname.slice(1).split('/')[urlFragmentPers]
                                    ) > -1
                                    ? 'technologischer-absolvent/' +
                                    location.pathname.slice(1).split('/')[urlFragmentPers + 1]
                                    : location.pathname
                            }
                            onClick={() =>
                                this.savePerspective('technologischer-absolvent')
                            }
                            className="nav-link"
                        >
                            > Absolvent & Young Professional
                        </Link>
                    </li>
                    <li
                        className={
                            StorageHelper.getFromSessionStorage('perspective').match(
                                'technologischer-professional'
                            )
                                ? 'nav-item h6 active'
                                : 'nav-item h6'
                        }
                    >
                        <Link
                            to={
                                location.pathname.slice(1).split('/').length > 0 &&
                                    this.perspectives.indexOf(
                                        location.pathname.slice(1).split('/')[urlFragmentPers]
                                    ) > -1
                                    ? 'technologischer-professional/' +
                                    location.pathname.slice(1).split('/')[urlFragmentPers + 1]
                                    : location.pathname
                            }
                            onClick={() =>
                                this.savePerspective('technologischer-professional')
                            }
                            className="nav-link"
                        >
                            > Professional
                        </Link>
                    </li>
                    <li>
                        <span className="text-white h6">/</span>
                    </li>
                    <li
                        className={
                            StorageHelper.getFromSessionStorage('perspective').match(
                                'studenten'
                            )
                                ? 'nav-item h6 active'
                                : 'nav-item h6'
                        }
                    >
                        <Link
                            to={
                                location.pathname.slice(1).split('/').length > 0 &&
                                    this.perspectives.indexOf(
                                        location.pathname.slice(1).split('/')[urlFragmentPers]
                                    ) > -1
                                    ? 'studenten/' +
                                    location.pathname.slice(1).split('/')[urlFragmentPers + 1]
                                    : location.pathname
                            }
                            onClick={() => this.savePerspective('studenten')}
                            className="nav-link"
                        >
                            STUDENTEN
                        </Link>
                    </li>
                    <li>
                        <span className="text-white h6">/</span>
                    </li>
                    <li
                        className={
                            StorageHelper.getFromSessionStorage('perspective').match(
                                'andere'
                            )
                                ? 'nav-item h6 active'
                                : 'nav-item h6'
                        }
                    >
                        <Link
                            to={
                                location.pathname.slice(1).split('/').length > 0 &&
                                    this.perspectives.indexOf(
                                        location.pathname.slice(1).split('/')[urlFragmentPers]
                                    ) > -1
                                    ? 'andere/' +
                                    location.pathname.slice(1).split('/')[urlFragmentPers + 1]
                                    : location.pathname
                            }
                            onClick={() => this.savePerspective('andere')}
                            className="nav-link"
                        >
                            ANDERE EXPERTISE
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MenuCompetence
