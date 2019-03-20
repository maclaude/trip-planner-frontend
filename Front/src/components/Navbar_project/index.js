/**
 * NPM import
 */
import React from 'react';

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
      <a className="item"><i className="camera retro icon" />Username</a>
    </div>
    <div id="navbar-project-main">
      <div id="new-project">
        <a className="item"><i className="plus icon" /> Crée un nouveau projet </a>
      </div>
      <div id="projects">
        <a className="item"><i className="chevron down icon" />Mes projets </a>
        <div id="my_projects">
          <a className="item">London</a>
          <a className="item">New-York</a>
        </div>
      </div>
    </div>
    <div id="navbar-project-footer">
      <div id="modification">
        <a className="item"><i className="cog icon" /> Modifier mon profil </a>
      </div>
      <div id="deconnexion">
        <a className="item"><i className="sign-out icon" /> Deconnexion </a>
      </div>
    </div>
  </div>

);

/**
 * Export
 */
export default NavbarProject;
