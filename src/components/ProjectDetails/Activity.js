/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import SuggestionCard from './SuggestionCard';

/**
 * Code
 */
const Activity = ({ suggestions }) => (
  <div id="activity">
    <div className="suggestions-cards-mini__container">
      {suggestions.length === 0 && (
        <p className="suggestion-message">
          Aucune suggestion n'est encore remontée
        </p>
      )}
      {suggestions.map(suggestion => (
        <SuggestionCard
          key={suggestion._id}
          {...suggestion}
        />
      ))}
    </div>
  </div>
);

// PropTypes validation
Activity.propTypes = {
  suggestions: PropTypes.array,
};

Activity.defaultProps = {
  suggestions: [],
};

/**
 * Export
 */
export default Activity;
