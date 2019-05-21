/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

/**
 * Local import
 */
// Utils
import { getURL } from 'src/utils/url';
// Style
import './navbar_project.scss';
// Assets
import avatar from 'src/assets/avatar/maclaude.jpg';

/**
 * Code
 */
class NavbarProject extends React.Component {
  /**
   * Local state
   */
  state = {
    isApproved: false,
  }

  /**
   * Handler
   */
  handleClick = () => {
    const { isApproved } = this.state;

    if (!isApproved) {
      this.setState({
        isApproved: true,
      });
    }
    else if (isApproved) {
      this.setState({
        isApproved: false,
      });
    }
  }

  render() {
    const { projects, user } = this.props;
    const { isApproved } = this.state;

    return (

      <div
        id="navbar-project"
        className={classNames(
          'ui visible inverted left vertical sidebar menu',
          { 'nav--active': isApproved },
        )}
      >
        <div
          id="burger"
          onClick={this.handleClick}
        >
          <div id="line1" />
          <div id="line2" />
          <div id="line3" />
        </div>
        <div id="navbar-username">
          <img id="navbar-username-avatar" src={avatar} alt="avatar" />
          <div
            id="navbar-username-name"
            className={classNames(
              'navbar-username-name',
              { 'navbar-username-name--active': isApproved },
            )}
          >
            Vous êtes connecté<br />
            {user.firstname}
          </div>
        </div>
        <div id="navbar-project-main">
          <div id="new-project">
            <NavLink
              to="/nouveau-projet"
              className={classNames(
                'item',
                { 'nav--active': isApproved },
              )}
            >
              <Icon name="plus" />
                Créer un nouveau projet
            </NavLink>
          </div>
          <div id="projects">
            <NavLink
              to="/mes-projets"
              className={classNames(
                'item',
                { 'nav--active': isApproved },
              )}
            >
              <Icon
                name="chevron down"
              />
                Mes projets
            </NavLink>
            <div id="my_projects">

              {projects.map(project => (
                <NavLink
                  to={getURL('recapitulatif', project.title)}
                  key={project.id}
                  exact
                  className={classNames(
                    'item',
                    { 'nav--active': isApproved },
                  )}
                >
                  {project.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div id="navbar-project-footer">
          <div id="modification">
            <NavLink
              to="Profil"
              className={classNames(
                'item',
                { 'nav--active': isApproved },
              )}
            >
              <Icon name="cog" />
                Modifier mon profil
            </NavLink>
          </div>
          <div id="deconnexion">
            <NavLink
              to="/"
              exact
              className={classNames(
                'item',
                { 'nav--active': isApproved },
              )}
            >
              <Icon name="sign-out" />
                Déconnexion
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

// PropTypes validation
NavbarProject.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  user: PropTypes.shape({
    firstname: PropTypes.string,
  }).isRequired,
};

/**
 * Export
 */
export default NavbarProject;
