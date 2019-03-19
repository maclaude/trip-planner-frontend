/**
 * NPM import
 */
import React from 'react';
import { FaInstagram, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';

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
    <FaInstagram />
    <FaTwitterSquare />
    <FaGithubSquare />
  </div>
);

/**
 * Export
 */
export default Footer;
