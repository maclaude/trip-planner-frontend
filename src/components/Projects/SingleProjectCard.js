/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Utils
import { getURL } from 'src/utils/url';

/**
 * Code
 */
class SingleProjectCard extends React.Component {
  handleClick = () => {
    const { _id: projectId, getProjectUserRole, getProjectSuggestions } = this.props;
    getProjectUserRole(projectId);
    getProjectSuggestions(projectId);
  }

  /**
   * Render
   */
  render() {
    const {
      _id,
      title,
      description,
      participants,
    } = this.props;

    return (
      <div className="project-card">
        <div className="project-card-header">
          <NavLink
            to={getURL('recapitulatif', title)}
            key={_id}
            exact
            className="project-card-header__title"
            onClick={this.handleClick}
          >
            {title}
          </NavLink>
        </div>
        <div className="project-card-main">
          <h4 className="project-card-main__title">
            Description
          </h4>
          <p className="project-card-main__content">
            {description}
          </p>
          <h4 className="project-card-main__title">
            Participants
          </h4>
          <p>
            {participants.length}
          </p>
        </div>
      </div>
    );
  }
}

// PropTypes validation
SingleProjectCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  participants: PropTypes.array.isRequired,
  getProjectUserRole: PropTypes.func.isRequired,
  getProjectSuggestions: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default SingleProjectCard;
