/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
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
const Ideas = ({ project }) => (
  <div id="ideas">
    <NavabarUser project={project} />
    <div id="suggestions">
      <SuggestionForm project={project} />
      <Divider />
      <Suggestions project={project} />
    </div>
  </div>
);

// PropTypes validation
Ideas.propTypes = {
  project: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default Ideas;
