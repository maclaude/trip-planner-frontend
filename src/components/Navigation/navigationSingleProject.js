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
  componentWillMount() {
    const { getProjectUserRole } = this.props;
    getProjectUserRole();
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
  getProjectUserRole: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default NavigationSingleProject;
