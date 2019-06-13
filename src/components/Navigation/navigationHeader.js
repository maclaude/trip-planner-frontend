/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Assets
import avatar from 'src/assets/avatar/maclaude.jpg';

/**
 * Code
 */
const NavigationHeader = ({ username }) => (
  <div id="navigation-header">
    <img id="navigation-header-avatar" src={avatar} alt="avatar" />
    <div id="navigation-header-username">{username}</div>
  </div>
);

// PropTypes validation
NavigationHeader.propTypes = {
  username: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default NavigationHeader;
