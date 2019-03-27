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
class SingleCard extends React.Component {
  handleClick = () => {
    const { voteOnSuggestion } = this.props;

    voteOnSuggestion();
  }

  render() {
    const {
      name,
      description,
      url,
      price,
      author,
    } = this.props;

    return (
      <Card className="card">
        <Card.Content
          header={name}
          description={description}
        />
        <Card.Content
          meta={<a href={url}>Lien</a>}
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
            onClick={this.handleClick}
          />
        </Card.Content>
      </Card>
    );
  }
}

// PropTypes validation
SingleCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  voteOnSuggestion: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default SingleCard;
