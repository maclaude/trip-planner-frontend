/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

/**
 * Local import
 */
import SingleCard from './singleCard';

/**
 * Code
 */
const Suggestions = ({ suggestions }) => (
  <div id="suggestions-ideas">
    <div id="suggestions-ideas-title">
      Activités
    </div>
    <div id="suggestion-ideas-cards">
      <Card.Group>
        {suggestions.map(suggestion => (
          <SingleCard
            key={suggestion.title}
            {...suggestion}
          />
        ))}
      </Card.Group>
    </div>
  </div>
);

// PropTypes validation
Suggestions.propTypes = {
  suggestions: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default Suggestions;
