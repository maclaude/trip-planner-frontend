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
import './navbar.scss';

/**
 * Code
 */
const Navbar = () => (
  <div id="navbar" className="ui visible inverted left vertical sidebar menu">
    <div id="navbar-username">
      <a className="item"><Icon name="camera retro" />Username</a>
    </div>
    <div id="navbar-main">
      <div id="new-project">
        <NavLink
          to="/nouveauprojet"
          className="item"
        >
          <Icon name="plus" /> Crée un nouveau projet
        </NavLink>
      </div>
      <div id="projects">
        <NavLink
          to="/mesprojets"
          className="item"
        >
          <Icon name="angle double right" />Mes projets
        </NavLink>
      </div>
    </div>
    <div id="navbar-footer">
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
export default Navbar;
