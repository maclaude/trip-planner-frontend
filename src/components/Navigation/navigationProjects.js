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
  componentDidMount() {}

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
            className="navigation-link"
            to="/nouveau-projet"
            activeClassName="navigation-link--active"
          >
            <div className="navigation-link-title">
              Nouveau projet
            </div>
            <Icon name="plus" />
          </NavLink>
          <NavLink
            to="/mes-projets"
            className="navigation-link"
            activeClassName="navigation-link--active"
          >
            <div className="navigation-link-title">
              Mes projets
            </div>
            <Icon name="chevron down" />
          </NavLink>
          {(projects.length !== 0) && (
            <div id="navigation-main-projects">
              {projects.map(project => (
                <NavLink
                  className="navigation-link navigation-link-project"
                  to={getURL('recapitulatif', project.title)}
                  key={project._id}
                  activeClassName="navigation-link--active"
                  exact
                >
                  <div className="navigation-link-title">
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
