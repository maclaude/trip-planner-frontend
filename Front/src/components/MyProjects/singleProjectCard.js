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

/**
 * Code
 */
const SingleProjectCard = ({ title, description, projectDates }) => (
  <Card
    className="card"
  >
    <Card.Content>
      <Card.Header textAlign="center">
        <NavLink
          className="card-title"
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
    <Card.Content textAlign="center">
      <Card.Meta>
        {`Dates: ${projectDates[0]} au ${projectDates[1]}`}
      </Card.Meta>
    </Card.Content>
  </Card>
);

// PropTypes validation
SingleProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectDates: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default SingleProjectCard;
