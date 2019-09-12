/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

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
  <div className="suggestion-card-mini">
    <div className="suggestion-card-mini-header">
      <div className="suggestion-card-mini-header__title">
        {title}
      </div>
      <p className="suggestion-card-mini-header__author">
        {author.firstname}
      </p>
    </div>
    <div className="suggestion-card-mini-main">
      <p className="suggestion-card-mini-main__description">
        {description}
      </p>
    </div>
    <div className="suggestion-card-mini-footer">
      <div className="suggestion-card-mini-footer__participants-vote">
        Approuvé par <strong>{userVote.length}</strong> participants
      </div>
    </div>
  </div>
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
