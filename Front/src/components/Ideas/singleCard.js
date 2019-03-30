/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';

/**
 * Local import
 */

/**
 * Code
 */
class SingleCard extends React.Component {
  /**
   * Handlers
   */
  handleClick = (evt, data) => {
    const { approvedSuggestion, disapprovedSuggestion } = this.props;

    if (data.name === 'heart') {
      approvedSuggestion();
    }
    else if (data.name === 'thumbs down') {
      disapprovedSuggestion();
    }
  }

  /**
   * Render
   */
  render() {
    const {
      name,
      description,
      url,
      price,
      author,
      vote,
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
          <div className="card-votes">
            {vote} participants ont votés pour
          </div>
          <div className="card-icons">
            <Icon
              className="card-icons-disapproved"
              name="thumbs down"
              size="large"
              onClick={this.handleClick}
            />
            <Icon
              className="card-icons-approved"
              name="heart"
              size="large"
              onClick={this.handleClick}
            />
          </div>
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
  vote: PropTypes.number.isRequired,
  approvedSuggestion: PropTypes.func.isRequired,
  disapprovedSuggestion: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default SingleCard;
