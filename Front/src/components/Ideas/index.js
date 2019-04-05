/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import NavabarUser from 'src/containers/NavbarUser';
import SuggestionForm from 'src/containers/Ideas/SuggestionForm';
import SuggestionIdeas from 'src/containers/Ideas/SuggestionIdeas';
import UserFooter from 'src/components/UserFooter';
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
      <SuggestionIdeas project={project} />
      <UserFooter />
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
