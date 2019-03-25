/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Icon } from 'semantic-ui-react';

/**
 * Local import
 */

/**
 * Code
 */
const SingleCard = ({
  title,
  description,
  link,
  price,
  author,
}) => (
  <Card className="card">
    <Card.Content
      header={title}
      description={description}
    />
    <Card.Content
      meta={<a href={link}>Lien</a>}
    />
    <Card.Content
      description={`Prix: ${price}€`}
    />
    <Card.Content textAlign="center" extra>
      <Icon name="user" />
      <strong>{author}</strong>
    </Card.Content>
    <Card.Content textAlign="center" extra>
      <Button
        content="like"
        icon="thumbs up"
        label={{
          pointing: 'right',
          content: '3',
        }}
        labelPosition="left"
      />
    </Card.Content>
  </Card>
);

// PropTypes validation
SingleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default SingleCard;
