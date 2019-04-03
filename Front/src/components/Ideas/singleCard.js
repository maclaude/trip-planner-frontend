/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card, Icon } from 'semantic-ui-react';

/**
 * Local import
 */

/**
 * Code
 */
class SingleCard extends React.Component {
  /**
   * Local state
   */
  state = {
    isApproved: false,
  }

  /**
   * Handlers
   */
  handleClick = () => {
    const { approvedSuggestion, disapprovedSuggestion } = this.props;

    const { isApproved } = this.state;

    if (!isApproved) {
      approvedSuggestion();

      this.setState({
        isApproved: true,
      });
    }
    else if (isApproved) {
      disapprovedSuggestion();

      this.setState({
        isApproved: false,
      });
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

    const { isApproved } = this.state;

    return (
      <Card className="card">
        <Card.Content
          header={name}
          description={description}
        />
        <Card.Content
          meta={<a target="new" href={url}>Lien</a>}
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
              className={classNames(
                'card-icons-heart',
                { 'card-icons-heart--active': isApproved },
              )}
              name="heart"
              size="big"
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
