/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

/**
 * Local import
 */
import SingleCard from 'src/containers/Ideas/SingleCard';

/**
 * Code
 */
const SuggestionIdeas = ({ suggestions }) => (
  <div id="suggestions-ideas">
    <div id="suggestions-ideas-title">
      Idées du groupe
    </div>
    <div id="suggestion-ideas-cards">
      <Card.Group>
        {suggestions.map(suggestion => (
          <SingleCard
            key={suggestion.id}
            {...suggestion}
          />
        ))}
      </Card.Group>
    </div>
  </div>
);

// PropTypes validation
SuggestionIdeas.propTypes = {
  suggestions: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default SuggestionIdeas;
