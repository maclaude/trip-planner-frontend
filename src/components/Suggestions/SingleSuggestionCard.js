/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaRegHeart } from 'react-icons/fa';

/**
 * Local import
 */

/**
 * Code
 */
class SingleSuggestionCard extends React.Component {
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

    // const votesCount = userVote.length;

    return (
      <div className="suggestion-card">
        <div className="suggestion-card-header">
          <div className="suggestion-card-header__title">
            {title}
          </div>
        </div>

        <div className="suggestion-card-main">
          <section>
            <div className="suggestion-card-main__description">
              {description}
            </div>

            <a className="suggestion-card-main__link" target="new" href={url}>Site web</a>
          </section>

          <section>
            <div className="suggestion-card-main__price">
              Prix: <strong>{price}€</strong>
            </div>

            <div className="suggestion-card-main__author">
              Suggéré par <strong>{author.firstname}</strong>
            </div>
          </section>
        </div>

        <div className="suggestion-card-footer">

          {/* <div className="suggestion-card-footer__participants">
            {votesCount} participants ont approuvés
          </div> */}

          <FaRegHeart
            className={classNames(
              'suggestion-card-footer__icon',
              { 'suggestion-card-footer__icon--active': currentUserHasVoted },
            )}
            onClick={this.voteProjectSuggestion(suggestionId)}
          />
        </div>
      </div>
    );
  }
}

// PropTypes validation
SingleSuggestionCard.propTypes = {
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
export default SingleSuggestionCard;
