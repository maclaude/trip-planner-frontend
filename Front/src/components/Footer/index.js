/**
 * NPM import
 */
import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';

/**
 * Local import
 */
// Style
import './footer.scss';

/**
 * Code
 */
const Footer = () => (
  <div id="footer">
    <p id="footer-copyright">Trip-planner 2019 &copy;</p>
    <div id="footer-social">
      <FaGithubSquare />
    </div>
  </div>
);

/**
 * Export
 */
export default Footer;
