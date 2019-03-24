/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import NavabarUser from 'src/components/Navbar';
import SuggestionForm from 'src/containers/Ideas/SuggestionForm';

// Styles
import './ideas.scss';

/**
 * Code
 */
const Ideas = () => (
  <div id="ideas">
    <NavabarUser />
    <SuggestionForm />
  </div>
);

/**
 * Export
 */
export default Ideas;
