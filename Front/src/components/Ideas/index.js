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
import Suggestions from 'src/containers/Ideas/Suggestions';

// Styles
import './ideas.scss';

/**
 * Code
 */
const Ideas = () => (
  <div id="ideas">
    <NavabarUser />
    <div id="suggestions">
      <SuggestionForm />
      <Suggestions />
    </div>
  </div>
);

/**
 * Export
 */
export default Ideas;
