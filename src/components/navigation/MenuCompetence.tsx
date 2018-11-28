import React from 'react';
import Link from 'gatsby-link';
import PubSub from 'pubsub-js';

import StorageHelper from 'utils/storageHelper';
import MenuItemsCompetence from '../../../config/MenuItemsCompetence';
import Kompetenzen from '../../../config/Kompetenzen';

import './MenuCompetence.scss';

interface Props {
  location: any;
  locationUpdate: string;
}

class MenuCompetence extends React.Component<Props> {
  private perspectives: string[];

  constructor(props: Props) {
    super(props);
    this.state = {
      perspective: StorageHelper.getFromSessionStorage('perspective'),
    };

    this.perspectives = Kompetenzen.map(x => x.id);
  }

  componentDidMount() {
    $(document).on('click', '#nav-menu-competence.show', function(e) {
      if ($(e.target).is('a')) {
        $(this).collapse('hide');
      }
    });

    $('#close-button-menu-competence').click(() => {
      $('#nav-menu-competence').collapse('hide');
    });
  }

  savePerspective(perspective: any): void {
    StorageHelper.saveInSessionStorage('perspective', perspective);
    this.setState({ perspective });
    PubSub.publish('perspectiveChange', perspective);
  }

  getPathPrefixPerspective(): string {
    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;

    if (this.getPerspective() === undefined || this.getPerspective().length === 0) {
      return pathPrefix;
    }

    return `${pathPrefix}/${this.getPerspective()}`;
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

    const { location, locationUpdate } = this.props;

    const mainUrl = pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/karriere';

    return (
      <div
        className="collapse"
        id="nav-menu-competence"
        hidden={locationUpdate === mainUrl || locationUpdate === `${mainUrl}/` ? true : false}
      >
        <div className="d-block text-white margin-20-bottom">
          <p className="h5 bold-font d-inline">DEINE KOMPETENZ</p>
          <button id="close-button-menu-competence" type="button" className="close d-inline" aria-label="Close">
            <img className="close-button-img" alt="Menü schließen" src={`${pathPrefix}/svg/icon_close.svg`} />
          </button>
        </div>
        <ul className="navbar-nav mr-auto text-dark">
          {MenuItemsCompetence.map((menuItem, index) => {
            if (menuItem.type === 'header') {
              return (
                <li key={`menu-item-${index}`} className="">
                  {menuItem.text}
                </li>
              );
            }
            if (menuItem.type === 'space') {
              return (
                <li key={`menu-item-${index}`}>
                  <span className="text-white">/</span>
                </li>
              );
            }
            return (
              <li
                key={`menu-item-${index}`}
                className={StorageHelper.getFromSessionStorage('perspective').match(menuItem.perspective) ? 'nav-item active' : 'nav-item'}
              >
                <img
                  className={menuItem.indented ? 'icon-select margin-20-left' : 'icon-select'}
                  alt="Auswählen"
                  src={`${pathPrefix}/svg/arrowright.svg`}
                />
                <Link
                  to={
                    location.pathname.slice(1).split('/').length > 2 &&
                    this.perspectives.indexOf(location.pathname.slice(1).split('/')[1]) > -1
                      ? menuItem.path + location.pathname.slice(1).split('/')[2]
                      : location.pathname
                  }
                  onClick={() => this.savePerspective(menuItem.perspective)}
                  className="nav-link"
                >
                  {menuItem.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MenuCompetence;
