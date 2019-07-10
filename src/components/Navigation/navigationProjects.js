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
class NavigationProjects extends React.Component {
  /**
   * Lifecycle
   */
  componentDidMount() {
    this.calcWindowSize();
    window.addEventListener('resize', this.calcWindowSize);
  }

  /**
   * Handlers
   */
  calcWindowSize = () => {
    const navigation = document.querySelector('#navigation');
    const userView = document.querySelector('.user-main');

    if (window.innerWidth <= 900) {
      navigation.classList.add('navigation--close');
      userView.classList.add('user-main--fullscreen');
    }
    else if (window.innerWidth > 900) {
      navigation.classList.remove('navigation--close');
      userView.classList.remove('user-main--fullscreen');
    }
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
                  <Icon name="chevron right" />
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
