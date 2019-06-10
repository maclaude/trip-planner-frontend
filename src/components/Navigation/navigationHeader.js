/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Assets
import avatar from 'src/assets/avatar/maclaude.jpg';

/**
 * Code
 */
const NavigationHeader = () => (
  <div id="navigation-header">
    <img id="navigation-header-avatar" src={avatar} alt="avatar" />
    <div id="navigation-header-username">Username</div>
  </div>
);

/**
 * Export
 */
export default NavigationHeader;
