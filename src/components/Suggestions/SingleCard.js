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
   * Handlers
   */
  voteProjectSuggestion = suggestionId => () => {
    const { projectId, voteProjectSuggestion } = this.props;
    voteProjectSuggestion(projectId, suggestionId);
  }

  /**
   * Render
   */
  render() {
    const {
      userId,
      _id: suggestionId,
      title,
      description,
      url,
      price,
      author,
      user_vote: userVote,
    } = this.props;

    const currentUserHasVoted = userVote.find(vote => vote === userId);

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
                { 'card-icons-heart--active': currentUserHasVoted },
              )}
              onClick={this.voteProjectSuggestion(suggestionId)}
            />
          </div>
        </Card.Content>
      </Card>
    );
  }
}

// PropTypes validation
SingleCard.propTypes = {
  projectId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  author: PropTypes.shape({
    firstname: PropTypes.string,
  }).isRequired,
  user_vote: PropTypes.array.isRequired,
  voteProjectSuggestion: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default SingleCard;
