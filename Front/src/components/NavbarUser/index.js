/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Icon, Image } from 'semantic-ui-react';

/**
 * Local import
 */
// Utils
import { getURL } from 'src/utils/url';
// Style
import './navbar_user.scss';
// Assets
import avatar from 'src/assets/avatar/default.png';

/**
 * Code
 */
const NavbarUser = ({ project }) => (
  <div id="navbar" className="ui visible inverted left vertical sidebar menu">
    <div id="navbar-header">
      <div id="navbar-username">
        <Image id="avatar" src={avatar} size="mini" circular />
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
      <div id="my-projects">
        <NavLink
          to="/mes-projets"
          className="item"
        >
          <Icon name="reply" />
            Mes projets
        </NavLink>
      </div>
      <div id="projects">
        <a className="item">{project.title}</a>
      </div>
      <div id="projects-details">
        <div id="availability-navbar">
          <NavLink
            to={getURL('/disponibilites', project.title)}
            key={project.id}
            exact
            className="item"
          >
            Définir mes disponibilités
          </NavLink>
        </div>
        <div id="Idées">
          <NavLink
            to={getURL('/idees', project.title)}
            key={project.id}
            exact
            className="item"
          >
            Idées du groupe
          </NavLink>
        </div>
        <div id="summary">
          <NavLink
            to={getURL('/recapitulatif', project.title)}
            key={project.id}
            exact
            className="item"
          >
            Récapitulatif
          </NavLink>
        </div>
        <div id="chat">
          <NavLink
            to="/chat"
            className="item"
          >
            Espace de discussion
          </NavLink>
        </div>
      </div>
      <div id="define-dates">
        <NavLink
          to={getURL('/dates', project.title)}
          key={project.id}
          exact
          className="item"
        >
          <Icon name="plus" />
            Ajouter des dates
        </NavLink>
      </div>
      <div id="add-participants">
        <NavLink
          to={getURL('/participants', project.title)}
          key={project.id}
          exact
          className="item"
        >
          <Icon name="add user" />
            Ajouter des participants
        </NavLink>
      </div>
    </div>
    <div id="navbar-footer">
      <div id="modification">
        <NavLink
          to="/profil"
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
NavbarUser.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

/**
 * Export
 */
export default NavbarUser;
