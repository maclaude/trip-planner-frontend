/**
 * NPM import
 */
import React from 'react';
import { Icon } from 'semantic-ui-react';

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
        <a className="item"><Icon name="plus" /> Crée un nouveau projet </a>
      </div>
      <div id="projects">
        <a className="item"><Icon name="angle double right" />Mes projets </a>
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
