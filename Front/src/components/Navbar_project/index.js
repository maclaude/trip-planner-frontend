/**
 * NPM import
 */
import React from 'react';
import { Icon } from 'semantic-ui-react';

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
        <a className="item"><Icon name="plus" />Crée un nouveau projet </a>
      </div>
      <div id="projects">
        <a className="item"><Icon name="chevron down" />Mes projets </a>
        <div id="my_projects">
          <a className="item">London</a>
          <a className="item">New-York</a>
        </div>
      </div>
    </div>
    <div id="navbar-project-footer">
      <div id="modification">
        <a className="item"><Icon name="cog" /> Modifier mon profil </a>
      </div>
      <div id="deconnexion">
        <a className="item"><Icon name="sign-out" /> Deconnexion </a>
      </div>
    </div>
  </div>

);

/**
 * Export
 */
export default NavbarProject;
