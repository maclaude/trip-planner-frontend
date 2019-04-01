/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

/**
 * Local import
 */
import SuggestionCard from './SuggestionCard';

/**
 * Code
 */
const Other = ({ suggestions }) => (
  <div id="other">
    <Card.Group>
      {suggestions.map(suggestion => (
        <SuggestionCard
          key={suggestion.id}
          {...suggestion}
        />
      ))}
    </Card.Group>
  </div>
);

// PropTypes validation
Other.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
/**
 * Export
 */
export default Other;
