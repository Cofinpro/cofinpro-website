import React from 'react';
import Link from 'gatsby-link';

import LinkButton from '../buttons/LinkButton';
import NavbarLinks from './NavbarLinks';
import StorageHelper from 'utils/storageHelper';
import MenuItems from '../../../config/MenuItems';

import './Menu.scss';

interface Props {
  id: string;
  location: any;
  locationUpdate: string;
}

interface State {
  perspective: any;
}

class Menu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      perspective: StorageHelper.getFromSessionStorage('perspective'),
    };
  }

  componentDidMount() {
    $(document).on('click', '.navbar-collapse.show', function(e) {
      if ($(e.target).is('a')) {
        $(this).collapse('hide');
      }
    });
  }

  getPathPrefixPerspective() {
    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;
    const perspective = this.getPerspective();

    if (perspective === undefined || perspective.length === 0) {
      return `${pathPrefix}/`;
    }

    return `${pathPrefix}/${perspective}`;
  }

  getPerspective(): string {
    if (typeof localStorage !== 'undefined') {
      if (StorageHelper.getFromSessionStorage('perspective').length > 0) {
        return `${StorageHelper.getFromSessionStorage('perspective')}`;
      }
    }

    return '';
  }

  render() {
    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;

    const { id, location, locationUpdate } = this.props;

    function hideMenu() {
      $(`#${id}`).collapse('hide');
    }

    return (
      <div className="collapse navbar-collapse main-navigation-bar" id={id}>
        <div>
          <Link to="/" className="navbar-brand d-none d-xl-block">
            <img className="cofinpro-logo-startseite" alt="Nächstes Bild" src={`${pathPrefix}/svg/logo_cofinpro.svg`} />
          </Link>
        </div>
        <div className="d-block d-xl-none text-secondary margin-20-bottom">
          <p className="h5 d-inline">MENÜ</p>
          <button type="button" className="close d-inline" aria-label="Close" onClick={hideMenu}>
            <img className="main-navigation-bar__img-close-button" alt="Menü schließen" src={`${pathPrefix}/svg/icon_close_blue.svg`} />
          </button>
        </div>
        <NavbarLinks location={location} locationUpdate={locationUpdate} menuItems={MenuItems} />
        <LinkButton text="KARRIERE" path="/karriere" {...this.props} />
      </div>
    );
  }
}

export default Menu;
