/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Utils
import { getURL } from 'src/utils/url';
// Style
import './navbar_project.scss';
// Assets
import avatar from 'src/assets/avatar/default.png';

/**
 * Code
 */
const NavbarProject = ({ projects }) => (
  <div id="navbar-project" className="ui visible inverted left vertical sidebar menu">
    <div id="navbar-project-username">
      <Image id="avatar" src={avatar} size="mini" circular />
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
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

/**
 * Export
 */
export default NavbarProject;
