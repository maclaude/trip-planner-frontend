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
import logo from 'src/assets/logo/logo_2.png';

/**
 * Code
 */
const UserFooter = () => (
  <footer className="user-container__footer">
    <img
      id="user-footer__logo"
      src={logo}
      alt="Logo trip-planner"
    />
  </footer>
);

/**
 * Export
 */
export default UserFooter;
