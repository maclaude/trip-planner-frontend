/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

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
    } = this.props;

    return (
      <Card
        className="project-card"
      >
        <Card.Content className="card-fit-content">
          <Card.Header textAlign="center">
            <NavLink
              to={getURL('recapitulatif', title)}
              key={_id}
              exact
              className="project-card__title"
              onClick={this.handleClick}
            >
              {title}
            </NavLink>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content
          className="card-fit-content"
          textAlign="center"
        >
          <Card.Meta>
            <p>Dates - Notifications </p>
          </Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

// PropTypes validation
SingleProjectCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  getProjectUserRole: PropTypes.func.isRequired,
  getProjectSuggestions: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default SingleProjectCard;
