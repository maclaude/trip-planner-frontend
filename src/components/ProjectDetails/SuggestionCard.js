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
  title,
  author,
  description,
  user_vote: userVote,
}) => (
  <Card className="suggestion-card">
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{author.firstname}</Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content className="suggestion-card-participants-approval" textAlign="center">
      <Card.Meta>Appouvé par {userVote.length} participants</Card.Meta>
    </Card.Content>
  </Card>
);

// PropTypes validation
SuggestionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  user_vote: PropTypes.array.isRequired,
  author: PropTypes.shape({
    firstname: PropTypes.string,
  }).isRequired,
};

/**
 * Export
 */
export default SuggestionCard;
