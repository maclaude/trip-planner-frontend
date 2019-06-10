/**
 * NPM import
 */
import React from 'react';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/**
 * Code
 */
const NavigationFooter = () => (
  <div id="navigation-footer">
    <NavLink
      className="navigation-link"
      to="profil"
      activeClassName="navigation-link--active"
    >
      <div className="navigation-link-title">
      Mon profil
      </div>
      <Icon name="cog" />
    </NavLink>
    <NavLink
      className="navigation-link"
      to="/signout"
      activeClassName="navigation-link--active"
    >
      <div className="navigation-link-title">
        Déconnexion
      </div>
      <Icon name="sign-out" />
    </NavLink>
  </div>
);

/**
 * Export
 */
export default NavigationFooter;
