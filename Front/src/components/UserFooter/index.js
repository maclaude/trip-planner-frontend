/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Style
import './user-footer.scss';
// Assets
import logo from 'src/assets/logo/logo_1.png';

/**
 * Code
 */
const UserFooter = () => (
  <div id="user-footer">
    <img
      id="user-footer-logo"
      src={logo}
      alt="Logo trip-planner"
    />
  </div>
);

/**
 * Export
 */
export default UserFooter;
