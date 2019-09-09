/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaPlus, FaChevronRight } from 'react-icons/fa';

/**
 * Local import
 */
// Style
import './navigation.scss';
// Components
import NavigationFooter from 'src/containers/Navigation/NavigationFooter';
import NavigationHeader from './NavigationHeader';

/**
 * Code
 */
class Navigation extends React.Component {
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
    this.navigationLinks.forEach(navigationLink => {
      navigationLink.addEventListener('click', this.closeNavigation);
    });
  }

  componentWillUnmount() {
    // Remove events listeners
    this.burgerMenu.removeEventListener('click', this.openNavigation);
    this.closeButton.removeEventListener('click', this.closeNavigation);
    this.navigationLinks.forEach(navigationLink => {
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
    const { username } = this.props;

    return (
      <div id="navigation">
        <NavigationHeader username={username} />

        <div id="navigation-main">
          <NavLink
            className="navigation__link"
            to="/nouveau-projet"
            activeClassName="navigation__link--active"
          >
            <div className="navigation__link-title">
              Nouveau projet
            </div>
            <FaPlus />
          </NavLink>
          <NavLink
            className="navigation__link"
            to="/mes-projets"
            activeClassName="navigation__link--active"
          >
            <div className="navigation__link-title">
              Mes projets
            </div>
            <FaChevronRight />
          </NavLink>
        </div>

        <NavigationFooter />
      </div>
    );
  }
}

// PropTypes validation
Navigation.propTypes = {
  username: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Navigation;
