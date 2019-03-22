/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import NavabarUser from 'src/components/Navbar';
import Suggestions from './suggestions';

// Styles
import './ideas.scss';

/**
 * Code
 */
const Ideas = () => (
  <div id="ideas">
    <NavabarUser />
    <Suggestions />
  </div>
);

/**
 * Export
 */
export default Ideas;
