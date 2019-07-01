/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Divider } from 'semantic-ui-react';

/**
 * Local import
 */
import SingleCard from 'src/containers/Suggestions/SingleCard';

/**
 * Code
 */
const SuggestionIdeas = ({ suggestions }) => (
  <section id="suggestions-ideas">
    <Divider />
    <h2 id="suggestions-ideas__title">
      Suggestions du groupe
    </h2>
    <div id="suggestion-ideas__cards">
      <Card.Group>
        {suggestions.map(suggestion => (
          <SingleCard
            key={suggestion.id}
            {...suggestion}
          />
        ))}
      </Card.Group>
    </div>
  </section>
);

// PropTypes validation
SuggestionIdeas.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

/**
 * Export
 */
export default SuggestionIdeas;
