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
import './navbar_user.scss';

/**
 * Code
 */
const NavbarUser = () => (
  <div id="navbar" className="ui visible inverted left vertical sidebar menu">
    <div id="navbar-username">
      <Image id="avatar" src="src/assets/avatar/default.png" size="mini" circular />
    </div>
    <div id="navbar-main">
      <div id="new-project">
        <NavLink
          to="/Nouveau-Projet"
          className="item"
        >
          <Icon name="plus" /> Crée un nouveau projet
        </NavLink>
      </div>
      <div id="projects">
        <a className="item">New-York 2019</a>
      </div>
      <div id="projects-details">
        <div id="availability-navbar">
          <NavLink
            to="Disponibilites"
            className="item"
          >
            Définir ses disponibilités
          </NavLink>
        </div>
        <div id="Idées">
          <NavLink
            to="idea"
            className="item"
          >
            Idées du groupe
          </NavLink>
        </div>
        <div id="summary">
          <NavLink
            to="Récapitulatif"
            className="item"
          >
            Récapitulatif
          </NavLink>
        </div>
        <div id="chat">
          <NavLink
            to="Chat"
            className="item"
          >
            Espace de discussion
          </NavLink>
        </div>
      </div>
    </div>
    <div id="navbar-footer">
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
export default NavbarUser;
