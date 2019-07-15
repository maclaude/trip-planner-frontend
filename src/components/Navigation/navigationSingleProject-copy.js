/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Style
import './navigation.scss';
// Utils
import { getURL } from 'src/utils/url';
// Components
import NavigationFooter from 'src/containers/Navigation/NavigationFooter';
import NavigationHeader from './NavigationHeader';


/**
 * Code
 */
class NavigationSingleProject extends React.Component {
  /**
   * Lifecycle
   */
  componentDidMount() {
    // Select DOM elements
    this.navigation = document.querySelector('#navigation');
    this.userView = document.querySelector('.user-container');
    this.burgerMenu = document.querySelector('.user-container__menu');
    this.closeButton = document.querySelector('#navigation-header__button');
    this.navigationLinks = document.querySelectorAll('.navigation__link');

    this.calcWindowSize();

    // Add events listeners
    window.addEventListener('resize', this.calcWindowSize);
    this.burgerMenu.addEventListener('click', this.openNavigation);
    this.closeButton.addEventListener('click', this.closeNavigation);
    this.navigationLinks.forEach((navigationLink) => {
      navigationLink.addEventListener('click', this.closeNavigation);
    });
  }

  componentWillUnmount() {
    // Remove events listeners
    this.burgerMenu.removeEventListener('click', this.openNavigation);
    this.closeButton.removeEventListener('click', this.closeNavigation);
    this.navigationLinks.forEach((navigationLink) => {
      navigationLink.removeEventListener('click', this.closeNavigation);
    });
  }

  /**
   * Handlers
   */
  calcWindowSize = () => {
    if (window.innerWidth <= 1100) {
      this.navigation.classList.add('navigation--close', 'navigation-close-icon');
      this.userView.classList.add('user-container--fullscreen');
      this.burgerMenu.classList.add('user-container__menu--appear');
    }
    else if (window.innerWidth > 1100) {
      this.navigation.classList.remove('navigation--close', 'navigation-close-icon');
      this.userView.classList.remove('user-container--fullscreen');
      this.burgerMenu.classList.remove('user-container__menu--appear');
    }
  }

  openNavigation = () => {
    this.navigation.classList.add('navigation--appear');
    this.navigation.classList.remove('navigation--close');
  }

  closeNavigation = () => {
    this.navigation.classList.remove('navigation--appear');
    this.navigation.classList.add('navigation--close');
    this.userView.classList.add('user-container--fullscreen');
  }

  /**
   * Render
   */
  render() {
    const { username, userRole, project } = this.props;

    return (
      <div id="navigation">
        <NavigationHeader username={username} />
        <div id="navigation-main">
          <NavLink
            className="navigation__link"
            activeClassName="navigation__link--active"
            to="/nouveau-projet"
          >
            <div className="navigation__link-title">
              Nouveau projet
            </div>
            <Icon name="plus" />
          </NavLink>
          <NavLink
            to="/mes-projets"
            className="navigation__link"
            activeClassName="navigation__link--active"
          >
            <div className="navigation__link-title">
              Mes projets
            </div>
            <Icon name="chevron down" />
          </NavLink>
          <div id="navigation-main-project">
            <div id="navigation-main-project__title">
              {project.title}
            </div>
            <div id="navigation-main-project__details">
              <NavLink
                to={getURL('/recapitulatif', project.title)}
                exact
                className="navigation__link navigation__link-project"
                activeClassName="navigation__link-project--active"
              >
                Récapitulatif
              </NavLink>
              <NavLink
                to={getURL('/disponibilites', project.title)}
                exact
                className="navigation__link navigation__link-project"
                activeClassName="navigation-link-project--active"
              >
                Définir mes disponibilités
              </NavLink>
              <NavLink
                to={getURL('/idees', project.title)}
                exact
                className="navigation__link navigation__link-project"
                activeClassName="navigation__link-project--active"
              >
                Idées du groupe
              </NavLink>
              <NavLink
                to="/chat"
                className="navigation__link navigation__link-project"
                activeClassName="navigation__link-project--active"
              >
                Espace de discussion
              </NavLink>
            </div>
          </div>
          {(userRole === 'creator') && (
          <div>
            <NavLink
              to={getURL('/dates', project.title)}
              exact
              className="navigation__link"
              activeClassName="navigation__link--active"
            >
              <div className="navigation__link-title">
                Ajouter des dates
              </div>
              <Icon name="plus" />
            </NavLink>
            <NavLink
              to={getURL('/participants', project.title)}
              exact
              className="navigation__link"
              activeClassName="navigation__link--active"
            >
              <div className="navigation__link-title">
                Ajouter des participants
              </div>
              <Icon name="add user" />
            </NavLink>
          </div>
          )}
        </div>
        <NavigationFooter />
      </div>
    );
  }
}

// PropTypes validation
NavigationSingleProject.propTypes = {
  username: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
  project: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

/**
 * Export
 */
export default NavigationSingleProject;
