/**
 * NPM import
 */
import React from 'react';
import { Icon } from 'semantic-ui-react';

/**
 * Local import
 */
// Style
import './navbar_user.scss';

/**
 * Code
 */
const NavbarUser = () => (
  <div id="navbar" className="ui visible inverted left vertical sidebar menu">
    <div id="navbar-username">
      <a className="item"><Icon name="camera retro" />Username</a>
    </div>
    <div id="navbar-main">
      <div id="new-project">
        <a className="item"><Icon name="plus" /> Crée un nouveau projet</a>
      </div>
      <div id="projects">
        <a className="item">Londres 2019</a>
      </div>
      <div id="projects-details">
        <div id="availability-navbar">
          <a className="item">Définir ses disponibilités</a>
        </div>
        <div id="idea">
          <a className="item">Idées du groupe</a>
        </div>
        <div id="summary">
          <a className="item">Récapitulatif</a>
        </div>
        <div id="chat">
          <a className="item">Espace de discussion</a>
        </div>
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
export default NavbarUser;
