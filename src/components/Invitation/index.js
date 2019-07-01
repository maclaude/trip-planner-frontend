/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import UserFooter from 'src/components/UserFooter';

// Style
import './invitation.scss';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

/**
 * Code
 */
class InvitationView extends React.Component {
  /**
   * Lifecycles
   */
  componentDidMount() {
    const { storeInvitationProjectId } = this.props;
    storeInvitationProjectId();
  }

  /**
   * Render
   */
  render() {
    return (
      <div id="invitation">
        <div id="invitation_main">
          <h1 id="invitation_main-title">Bonjour !</h1>
          <h2>Vous avez été invité à rejoindre le projet de Marc-Antoine</h2>
          <div id="invitation_main-authentication">
            <NavLink
              to="/inscription"
              exact
              className="
                button
                button--large
                button-invitation
              "
            >
              <p>Je n'ai pas de compte</p>
            </NavLink>
            <NavLink
              to="/connexion"
              exact
              className="
                button
                button--large
                button-invitation
              "
            >
              <p>Connexion</p>
            </NavLink>
          </div>
        </div>
        <UserFooter />
      </div>
    );
  }
}

// PropTypes validation
InvitationView.propTypes = {
  storeInvitationProjectId: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default InvitationView;
