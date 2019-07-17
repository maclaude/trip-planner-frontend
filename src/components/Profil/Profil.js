/**
 * NPM import
 */
import React from 'react';
// import PropTypes from 'prop-types';

/**
 * Local import
 */
// Styles
import './profil.scss';
// Components
import UserFooter from 'src/components/UserFooter';

/**
 * Code
 */
class Profil extends React.Component {
  /**
   * Lifecycles
   */
  componentWillMount() {}

  /**
   * Render
   */
  render() {
    return (
      <div className="user-container" id="profil">

        <div className="user-container__menu">
          <div className="hamburger" />
        </div>

        <div className="user-container__banner">
          <h1>Profil</h1>
        </div>

        <UserFooter />
      </div>

    );
  }
}

// PropTypes validation
Profil.propTypes = {};

/**
 * Export
 */
export default Profil;
