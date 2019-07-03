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
const Accomodation = ({ suggestions }) => (
  <div id="accomodation">
    {suggestions.length === 0 && (
      <p className="suggestion-message">
        Aucune suggestion n'est encore remontée
      </p>
    )}
    <Card.Group>
      {suggestions.map(suggestion => (
        <SuggestionCard
          key={suggestion._id}
          {...suggestion}
        />
      ))}
    </Card.Group>
  </div>
);

// PropTypes validation
Accomodation.propTypes = {
  suggestions: PropTypes.array,
};

Accomodation.defaultProps = {
  suggestions: [],
};
/**
 * Export
 */
export default Accomodation;
