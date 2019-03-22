/**
 * NPM import
 */
import React from 'react';
import { Icon } from 'semantic-ui-react';
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
      <a className="item"><Icon name="camera retro" />Username</a>
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
          <a className="item">London</a>
          <a className="item">New-York</a>
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
