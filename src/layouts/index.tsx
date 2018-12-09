import React from 'react';

import ChatBot from '../components/ChatBot';
import emergence from 'emergence.js';

import StorageHelper from '../utils/storageHelper';

import './gatsrap.scss';
import 'animate.css/animate.css';

import ReactGA from 'react-ga';

import MainNavigation from '../components/navigation/MainNavigation';
import NavigationCareer from '../components/navigation/NavigationCareer';
import SiteFooter from '../components/SiteFooter';

interface Props {
  location: any;
  history: any;
}

interface State {
  perspective: string;
  visible: boolean;
  locationUpdate: any;
}

class Template extends React.Component<Props, State> {
  private perspectives: string[];

  constructor(props: Props) {
    super(props);

    this.perspectives = [
      'studenten',
      'technologischer-absolvent',
      'technologischer-professional',
      'fachlicher-absolvent',
      'fachlicher-professional',
      'andere',
    ];

    let perspectiveFromUrl;

    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;

    const urlFragmentPers = pathPrefix != null && pathPrefix.length > 2 ? 1 : 0;

    if (
      props.location.pathname.slice(1).split('/').length > 0 &&
      this.perspectives.indexOf(props.location.pathname.slice(1).split('/')[urlFragmentPers]) > -1
    ) {
      perspectiveFromUrl = props.location.pathname.slice(1).split('/')[urlFragmentPers];
      StorageHelper.saveInSessionStorage('perspective', props.location.pathname.slice(1).split('/')[urlFragmentPers]);
    } else {
      perspectiveFromUrl = '';
    }

    this.state = {
      perspective: perspectiveFromUrl,
      visible: perspectiveFromUrl.length === 0 ? false : true,
      locationUpdate: props.location.pathname,
    };

    /* Damit wir URL Ändeurngen mitbekommen und diese an die Navigation weitergeben können */
    this.props.history.listen((location: any) => {
      console.log('on route change');
      console.log(`location: ${location.pathname}`);

      const urlFragment = pathPrefix != null && pathPrefix.length > 2 ? 1 : 0;

      if (
        location.pathname.slice(1).split('/').length > 0 &&
        this.perspectives.indexOf(location.pathname.slice(1).split('/')[urlFragment]) > -1
      ) {
        StorageHelper.saveInSessionStorage('perspective', location.pathname.slice(1).split('/')[urlFragment]);
      }

      if (
        this.state.locationUpdate !== location.pathname ||
        this.state.perspective !== StorageHelper.getFromSessionStorage('perspective')
      ) {
        this.setState({
          perspective: StorageHelper.getFromSessionStorage('perspective'),
          locationUpdate: location.pathname,
        });
      }
    });
    ReactGA.initialize('UA-111444132-1', { debug: true });
  }

  componentDidUpdate() {
    emergence.init();
  }

  handlePerspectiveChange(newPerspective: string): void {
    console.log(`newPerspective: ${newPerspective}`);
  }

  render() {
    const { location, children } = this.props;

    return (
      <div>
        <header>
          <MainNavigation location={location} locationUpdate={this.state.locationUpdate} {...this.props} />{' '}
          <NavigationCareer locationUpdate={this.state.locationUpdate} {...this.props} />{' '}
        </header>{' '}
        <main> {children} </main> <SiteFooter locationUpdate={this.state.locationUpdate} {...this.props} />{' '}
        {/* <ChatBot locationUpdate={this.state.locationUpdate} {...this.props} />{' '}
        {' '} */}
      </div>
    );
  }
}

export default Template;
