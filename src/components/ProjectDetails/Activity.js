/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

/**
 * Local import
 */
// import SuggestionCard from './SuggestionCard';

/**
 * Code
 */
const Activity = ({ suggestions }) => (
  <div id="activity">
    {suggestions.length === 0 && (
      <p className="suggestion-message">
        Aucune suggestion n'est encore remontée
      </p>
    )}
    <Card.Group>
      {/* {suggestions.map(suggestion => (
        <SuggestionCard
          key={suggestion.id}
          {...suggestion}
        />
      ))} */}
    </Card.Group>
  </div>
);

// PropTypes validation
Activity.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
/**
 * Export
 */
export default Activity;
