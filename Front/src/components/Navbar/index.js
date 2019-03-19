/**
 * NPM import
 */
import React from 'react';
import { FaUserCircle, FaCog, FaSignOutAlt, FaPlus, FaAngleDoubleRight } from 'react-icons/fa';

/**
 * Local import
 */
// Style
import './navbar.scss';

/**
 * Code
 */
const Navbar = () => (
  <div id="navbar">
    <div id="navbar-username">
      <i><FaUserCircle /></i>
      <p>Username</p>
    </div>
    <div id="navbar-main">
      <div id="new-project">
        <p>Crée un nouveau projet</p>
        <i><FaPlus /></i>
      </div>
      <div id="projects">
        <p>Mes projets</p>
        <i><FaAngleDoubleRight /></i>
      </div>
    </div>
    <div id="navbar-footer">
      <div id="modification">
        <p>Modifier mon profil</p>
        <i><FaCog /></i>
      </div>
      <div id="deconnexion">
        <p>Deconnexion</p>
        <i><FaSignOutAlt /></i>
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default Navbar;
