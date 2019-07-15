/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { NavLink, Redirect } from 'react-router-dom';

/**
 * Code
 */
class NavigationFooter extends React.Component {
  disconnectUser = () => {
    const { disconnectUser } = this.props;
    disconnectUser();
  }

  /**
   * Render
   */
  render() {
    const { isAuthenticated } = this.props;

    if (!isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div id="navigation-footer">
        <NavLink
          className="navigation__link"
          to="/profil"
          activeClassName="navigation__link--active"
        >
          <div className="navigation__link-title">
          Mon profil
          </div>
          <Icon name="cog" />
        </NavLink>

        <div className="navigation__link" onClick={this.disconnectUser}>
          <div className="navigation__link-title">
            Déconnexion
          </div>
          <Icon name="sign-out" />
        </div>

      </div>
    );
  }
}

// PropTypes validation
NavigationFooter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  disconnectUser: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default NavigationFooter;
