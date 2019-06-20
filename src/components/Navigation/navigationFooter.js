/**
 * NPM import
 */
import React from 'react';
import { Icon } from 'semantic-ui-react';
import { NavLink, Redirect } from 'react-router-dom';

/**
 * Code
 */
class NavigationFooter extends React.Component {
  disconnect = () => {
    console.log('disconnect');
  }

  /**
   * Render
   */
  render() {
    return (
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

        <div className="navigation-link" onClick={this.disconnect}>
          <div className="navigation-link-title">
            Déconnexion
          </div>
          <Icon name="sign-out" />
        </div>

      </div>
    );
  }
}

/**
 * Export
 */
export default NavigationFooter;
