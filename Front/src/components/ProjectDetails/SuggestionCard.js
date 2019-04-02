/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

/**
 * Local import
 */

/**
 * Code
 */
const SuggestionCard = ({
  name,
  author,
  description,
  vote,
}) => (
  <Card className="suggestion-card">
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{author}</Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content textAlign="center">
      <Card.Meta>Appouvé par {vote} participants</Card.Meta>
    </Card.Content>
  </Card>
);

// PropTypes validation
SuggestionCard.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

/**
 * Export
 */
export default SuggestionCard;