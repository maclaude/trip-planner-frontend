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
class NavigationSingleProject extends React.Component {
  /**
   * Lifecycle
   */
  componentDidMount() {}

  /**
   * Render
   */
  render() {
    const { project } = this.props;

    return (
      <div id="navigation">
        <NavigationHeader />
        <div id="navigation-main">
          <NavLink
            className="navigation-link"
            activeClassName="navigation-link--active"
            to="/nouveau-projet"
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
          <div id="navigation-main-project">
            <div id="navigation-main-project-title">
              {project.title}
            </div>
            <div id="navigation-main-project-details">
              <NavLink
                to={getURL('/recapitulatif', project.title)}
                key={project.id}
                exact
                className="navigation-link navigation-link-project"
                activeClassName="navigation-link-project--active"
              >
                Récapitulatif
              </NavLink>
              <NavLink
                to={getURL('/disponibilites', project.title)}
                key={project.id}
                exact
                className="navigation-link navigation-link-project"
                activeClassName="navigation-link-project--active"
              >
                Définir mes disponibilités
              </NavLink>
              <NavLink
                to={getURL('/idees', project.title)}
                key={project.id}
                exact
                className="navigation-link navigation-link-project"
                activeClassName="navigation-link-project--active"
              >
                Idées du groupe
              </NavLink>
              <NavLink
                to="/chat"
                className="navigation-link navigation-link-project"
                activeClassName="navigation-link-project--active"
              >
                Espace de discussion
              </NavLink>
            </div>
          </div>
          <NavLink
            to={getURL('/dates', project.title)}
            key={project.id}
            exact
            className="navigation-link"
            activeClassName="navigation-link--active"
          >
            <div className="navigation-link-title">
              Ajouter des dates
            </div>
            <Icon name="plus" />
          </NavLink>
          <NavLink
            to={getURL('/participants', project.title)}
            key={project.id}
            exact
            className="navigation-link"
            activeClassName="navigation-link--active"
          >
            <div className="navigation-link-title">
              Ajouter des participants
            </div>
            <Icon name="add user" />
          </NavLink>
        </div>
        <NavigationFooter />
      </div>
    );
  }
}

// PropTypes validation
NavigationSingleProject.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    firstname: PropTypes.string,
  }).isRequired,
};

/**
 * Export
 */
export default NavigationSingleProject;
