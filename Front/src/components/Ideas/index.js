/**
 * NPM import
 */
import React from 'react';
import { Divider } from 'semantic-ui-react';

/**
 * Local import
 */
// Components
import NavabarUser from 'src/components/NavbarUser';
import SuggestionForm from 'src/containers/Ideas/SuggestionForm';
import Suggestions from 'src/containers/Ideas/SuggestionIdeas';

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
      <Divider />
      <Suggestions />
    </div>
  </div>
);

/**
 * Export
 */
export default Ideas;
