/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import NavigationSingleProject from 'src/containers/Navigation/NavigationSingleProject';
import SuggestionForm from 'src/containers/Suggestions/SuggestionForm';
import SuggestionIdeas from 'src/containers/Suggestions/SuggestionIdeas';
import UserFooter from 'src/components/UserFooter';
// Styles
import './suggestions.scss';

/**
 * Code
 */
const SuggestionsView = ({ project }) => (
  <div className="user-view">
    <NavigationSingleProject project={project} />
    <main className="user-main" id="suggestions">
      <h1 className="user-main__title">Idées</h1>
      <SuggestionForm project={project} />
      <SuggestionIdeas project={project} />
      <UserFooter />
    </main>
  </div>
);

// PropTypes validation
SuggestionsView.propTypes = {
  project: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default SuggestionsView;
