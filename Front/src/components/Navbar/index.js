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
import './navbar.scss';
// Assets
import avatar from 'src/assets/avatar/default.png';

/**
 * Code
 */
const Navbar = () => (
  <div id="navbar" className="ui visible inverted left vertical sidebar menu">
    <div id="navbar-username">
      <Image id="avatar" src={avatar} size="mini" circular />
    </div>
    <div id="navbar-main">
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
          <Icon name="angle double right" />
            Mes projets
        </NavLink>
      </div>
    </div>
    <div id="navbar-footer">
      <div id="modification">
        <NavLink
          to="profil"
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
        >
          <Icon name="sign-out" />
            Déconnexion
        </NavLink>
      </div>
    </div>
  </div>

);

/**
 * Export
 */
export default Navbar;
