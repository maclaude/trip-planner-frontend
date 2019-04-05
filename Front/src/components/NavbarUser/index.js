/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import classNames from 'classnames';

/**
 * Local import
 */
// Utils
import { getURL } from 'src/utils/url';
// Style
import './navbar_user.scss';
// Assets
import avatar from 'src/assets/avatar/marc_antoine_avatar.jpg';

/**
 * Code
 */
class NavbarUser extends React.Component {
  /**
   * Local state
   */
  state = {
    isApproved: false,
  }

  /**
   * Handler
   */
  handleClick = () => {
    const { isApproved } = this.state;

    if (!isApproved) {
      this.setState({
        isApproved: true,
      });
    }
    else if (isApproved) {
      this.setState({
        isApproved: false,
      });
    }
  }

  render() {
    const { project, user } = this.props;
    const { isApproved } = this.state;

    return (
      <div
        id="navbar"
        className={classNames(
          'ui visible inverted left vertical sidebar menu',
          { 'nav--active': isApproved },
        )}
      >
        <div
          id="burger"
          onClick={this.handleClick}
        >
          <div id="line1" />
          <div id="line2" />
          <div id="line3" />
        </div>
        <div id="navbar-header">
          <div id="navbar-username">
            <img id="navbar-username-avatar" src={avatar} alt="avatar" />
            <div
              id="navbar-username-name"
              className={classNames(
                'navbar-username-name',
                { 'navbar-username-name--active': isApproved },
              )}
            >
            Vous êtes connecté<br />
              {user.firstname}
            </div>
          </div>
        </div>
        <div id="navbar-main">
          <div id="new-project">
            <NavLink
              to="/nouveau-projet"
              className={classNames(
                'item',
                { 'nav--active': isApproved },
              )}
            >
              <Icon name="plus" />
                Créer un nouveau projet
            </NavLink>
          </div>
          <div id="my-projects">
            <NavLink
              to="/mes-projets"
              className={classNames(
                'item',
                { 'nav--active': isApproved },
              )}
            >
              <Icon name="reply" />
                Mes projets
            </NavLink>
          </div>
          <div id="projects">
            <a className={classNames(
              'item',
              { 'nav--active': isApproved },
            )}
            >
              {project.title}
            </a>
          </div>
          <div id="projects-details">
            <div id="availability-navbar">
              <NavLink
                to={getURL('/disponibilites', project.title)}
                key={project.id}
                exact
                className={classNames(
                  'item',
                  { 'nav--active': isApproved },
                )}
              >
                Définir mes disponibilités
              </NavLink>
            </div>
            <div id="Idées">
              <NavLink
                to={getURL('/idees', project.title)}
                key={project.id}
                exact
                className={classNames(
                  'item',
                  { 'nav--active': isApproved },
                )}
              >
                Idées du groupe
              </NavLink>
            </div>
            <div id="summary">
              <NavLink
                to={getURL('/recapitulatif', project.title)}
                key={project.id}
                exact
                className={classNames(
                  'item',
                  { 'nav--active': isApproved },
                )}
              >
                Récapitulatif
              </NavLink>
            </div>
            <div id="chat">
              <NavLink
                to="/chat"
                className={classNames(
                  'item',
                  { 'nav--active': isApproved },
                )}
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
              className={classNames(
                'item',
                { 'nav--active': isApproved },
              )}
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
              className={classNames(
                'item',
                { 'nav--active': isApproved },
              )}
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
              className={classNames(
                'item',
                { 'nav--active': isApproved },
              )}
            >
              <Icon name="cog" />
                Modifier mon profil
            </NavLink>
          </div>
          <div id="deconnexion">
            <NavLink
              to="/"
              exact
              className={classNames(
                'item',
                { 'nav--active': isApproved },
              )}
            >
              <Icon name="sign-out" />
                Déconnexion
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}


// PropTypes validation
NavbarUser.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    firstname: PropTypes.string,
  }).isRequired,
};

/**
 * Export
 */
export default NavbarUser;
