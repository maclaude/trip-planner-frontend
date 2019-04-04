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
// Utils
import { getURL } from 'src/utils/url';
// Style
import './navbar_project.scss';
// Assets
import avatar from 'src/assets/avatar/marc_antoine_avatar.jpg';

/**
 * Code
 */
const NavbarProject = ({ projects, user }) => (
  <div id="navbar-project" className="ui visible inverted left vertical sidebar menu">
    <div id="navbar-username">
      <img id="navbar-username-avatar" src={avatar} alt="avatar" />
      <div id="navbar-username-name">
        Vous êtes connecté<br />
        {user.firstname}
      </div>
    </div>
    <div id="navbar-project-main">
      <div id="new-project">
        <NavLink
          to="/nouveau-projet"
          className="item"
        >
          <Icon name="plus" />
            Créer un nouveau projet
        </NavLink>
      </div>
      <div id="projects">
        <NavLink
          to="/mes-projets"
          className="item"
        >
          <Icon name="chevron down" />
            Mes projets
        </NavLink>
        <div id="my_projects">

          {projects.map(project => (
            <NavLink
              to={getURL('recapitulatif', project.title)}
              key={project.id}
              exact
              className="item"
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
          className="item"
        >
          <Icon name="cog" />
            Modifier mon profil
        </NavLink>
      </div>
      <div id="deconnexion">
        <NavLink
          to="/"
          className="item"
          exact
        >
          <Icon name="sign-out" />
            Déconnexion
        </NavLink>
      </div>
    </div>
  </div>
);

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
