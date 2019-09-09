/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaPlus, FaChevronDown } from 'react-icons/fa';

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
class NavigationProjects extends React.Component {
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
    const { username, projects } = this.props;

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
            to="/mes-projets"
            className="navigation__link"
            activeClassName="navigation__link--active"
          >
            <div className="navigation__link-title">
              Mes projets
            </div>
            <FaChevronDown />
          </NavLink>
          {(projects.length !== 0) && (
            <div id="navigation-main-projects">
              {projects.map(project => (
                <NavLink
                  className="navigation__link navigation__link-project"
                  to={getURL('recapitulatif', project.title)}
                  key={project._id}
                  activeClassName="navigation__link--active"
                  exact
                >
                  <div className="navigation__link-title">
                    {project.title}
                  </div>
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <NavigationFooter />
      </div>
    );
  }
}

// PropTypes validation
NavigationProjects.propTypes = {
  username: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

NavigationProjects.defaultProps = {
  projects: [],
};

/**
 * Export
 */
export default NavigationProjects;
