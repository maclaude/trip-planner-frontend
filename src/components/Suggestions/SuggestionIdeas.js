/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import SingleCard from 'src/containers/Suggestions/SingleCard';

/**
 * Code
 */
const SuggestionIdeas = ({ project, suggestions }) => (
  <section className="user-container__section-2" id="suggestions-ideas">
    <h2 id="suggestions-ideas__title">
      Suggestions du groupe
    </h2>
    <div id="suggestions-ideas__cards">
      {suggestions.map(suggestion => (
        <SingleCard
          key={suggestion._id}
          projectId={project._id}
          {...suggestion}
        />
      ))}
    </div>
  </section>
);

// PropTypes validation
SuggestionIdeas.propTypes = {
  project: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }).isRequired,
  suggestions: PropTypes.array,
};

SuggestionIdeas.defaultProps = {
  suggestions: [],
};

/**
 * Export
 */
export default SuggestionIdeas;
