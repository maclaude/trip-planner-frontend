/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Style
import './navbar.scss';
// Assets
import avatar from 'src/assets/avatar/marc_antoine_avatar.jpg';

/**
 * Code
 */
const Navbar = ({ user }) => (
  <div id="navbar" className="ui visible inverted left vertical sidebar menu">
    <div id="navbar-username">
      <img id="navbar-username-avatar" src={avatar} alt="avatar" />
      <div id="navbar-username-name">
        Vous êtes connecté<br />
        {user.firstname}
      </div>
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

// PropTypes validation
Navbar.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string,
  }).isRequired,
};

/**
 * Export
 */
export default Navbar;
