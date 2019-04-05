/**
 * NPM import
 */
import React from 'react';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

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
class Navbar extends React.Component {
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
        <div id="line1"></div>
        <div id="line2"></div>
        <div id="line3"></div>
      </div>
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
          Marc-Antoine
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
        <div id="projects">
          <NavLink
            to="/mes-projets"
            className={classNames(
              'item',
              { 'nav--active': isApproved },
            )}
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


/**
 * Export
 */
export default Navbar;
