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

    <div className="user-container" id="suggestions">

      <div className="user-container__menu">
        <div className="hamburger" />
      </div>

      <div className="user-container__banner">
        <h1>Idées</h1>
      </div>

      <SuggestionForm project={project} />
      <SuggestionIdeas project={project} />
      <UserFooter />
    </div>
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
