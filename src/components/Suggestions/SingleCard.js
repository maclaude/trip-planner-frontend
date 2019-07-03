/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card, Icon } from 'semantic-ui-react';
import { FaRegHeart } from 'react-icons/fa';

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
      title,
      description,
      url,
      price,
      author,
      user_vote: userVote,
    } = this.props;

    const { isApproved } = this.state;

    const votesCount = userVote.length;

    return (
      <Card className="card">
        <Card.Content
          header={title}
          description={description}
        />
        <Card.Content
          className="card-fit-content"
          meta={<a target="new" href={url}>Lien</a>}
        />
        <Card.Content
          className="card-fit-content"
          description={`Prix: ${price}€`}
        />
        <Card.Content className="card-fit-content" textAlign="center" extra>
          <Icon name="user" />
          <strong>{author.firstname}</strong>
        </Card.Content>
        <Card.Content className="card-fit-content" textAlign="center" extra>
          <div className="card-votes">
            {votesCount} participants ont approuvés
          </div>
          <div className="card-icons">
            <FaRegHeart
              className={classNames(
                'card-icons-heart',
                { 'card-icons-heart--active': isApproved },
              )}
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  approvedSuggestion: PropTypes.func.isRequired,
  disapprovedSuggestion: PropTypes.func.isRequired,
  author: PropTypes.shape({
    firstname: PropTypes.string,
  }).isRequired,
  user_vote: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default SingleCard;
