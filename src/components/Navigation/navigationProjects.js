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
import NavigationHeader from './navigationHeader';
import NavigationFooter from './navigationFooter';

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
    const { projects } = this.props;

    return (
      <div id="navigation">
        <NavigationHeader />
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
          <div id="navigation-main-projects">
            {projects.map(project => (
              <NavLink
                className="navigation-link navigation-link-project"
                to={getURL('recapitulatif', project.title)}
                key={project.id}
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
        </div>
        <NavigationFooter />
      </div>
    );
  }
}

// PropTypes validation
NavigationProjects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

/**
 * Export
 */
export default NavigationProjects;
