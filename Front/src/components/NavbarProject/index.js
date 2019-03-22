/**
 * NPM import
 */
import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Style
import './navbar_project.scss';

/**
 * Code
 */
const NavbarProject = () => (
  <div id="navbar-project" className="ui visible inverted left vertical sidebar menu">
    <div id="navbar-project-username">
      <Image id="avatar" src="src/assets/avatar/default.png" size="mini" circular />
    </div>
    <div id="navbar-project-main">
      <div id="new-project">
        <NavLink
          to="/Nouveau-Projet"
          className="item"
        >
          <Icon name="plus" /> Crée un nouveau projet
        </NavLink>
      </div>
      <div id="projects">
        <NavLink
          to="/Mes-projets"
          className="item"
        >
          <Icon name="chevron down" />Mes projets
        </NavLink>
        <div id="my_projects">
          <NavLink
            to="Récapitulatif"
            className="item"
          >
            New-York
          </NavLink>
        </div>
      </div>
    </div>
    <div id="navbar-project-footer">
      <div id="modification">
        <NavLink
          to="Profil"
          className="item"
        >
          <Icon name="cog" /> Modifier mon profil
        </NavLink>
      </div>
      <div id="deconnexion">
        <NavLink
          to="/"
          className="item"
          exact
        >
          <Icon name="sign-out" /> Deconnexion
        </NavLink>
      </div>
    </div>
  </div>

);

/**
 * Export
 */
export default NavbarProject;
