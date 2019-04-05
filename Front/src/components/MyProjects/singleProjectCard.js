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
import getDateFormat from 'src/utils/date_format';

/**
 * Code
 */
const SingleProjectCard = ({
  id,
  title,
  description,
  projectDates,
}) => (
  <Card
    className="project-card"
  >
    <Card.Content>
      <Card.Header textAlign="center">
        <NavLink
          to={getURL('recapitulatif', title)}
          key={id}
          exact
          className="project-card-title"
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
        {projectDates.length === 0 && (
          <p>Les dates ne sont pas encore remontées</p>
        )}
        {projectDates.length !== 0 && (
          `Dates: ${getDateFormat(projectDates[0].starDate)} au ${getDateFormat(projectDates[0].endDate)}`
        )}
      </Card.Meta>
    </Card.Content>
  </Card>
);

// PropTypes validation
SingleProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectDates: PropTypes.array,
};

SingleProjectCard.defaultProps = {
  projectDates: [],
};

/**
 * Export
 */
export default SingleProjectCard;
