/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Style
// import './navbar.scss';
import './navbarUI.scss';

/**
 * Code
 */
const Navbar = () => (
  <div id="navbar" className="ui visible inverted left vertical sidebar menu">
    <div id="navbar-username">
      <a className="item"><i className="camera retro icon" />Username</a>
    </div>
    <div id="navbar-main">
      <div id="new-project">
        <a className="item"><i className="plus icon" /> Crée un nouveau projet </a>
      </div>
      <div id="projects">
        <a className="item"><i className="angle double right icon" />Mes projets </a>
      </div>
    </div>
    <div id="navbar-footer">
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
export default Navbar;
