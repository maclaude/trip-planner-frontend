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
  userHasVoted,
}) => (
  <Card
    className="project-card"
  >
    <Card.Content className="card-fit-content">
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
    <Card.Content
      className="card-fit-content"
      textAlign="center"
    >
      <Card.Meta>
        {(projectDates.length === 0) && (
          <p>Vous devez définir des dates</p>
        )}
        {userHasVoted === false && id === 7 && (
          <p>Les dates ne sont pas encore remontées</p>
        )}
        {((userHasVoted === false && id !== 7 && projectDates.length !== 0)
        || (userHasVoted === true && projectDates.length !== 0)) && (
          `Dates: ${getDateFormat(projectDates[0].startDate)} au ${getDateFormat(projectDates[0].endDate)}`
        )}
      </Card.Meta>
    </Card.Content>
    {userHasVoted === false && id === 7 && (
      <div id="notification">1</div>
    )}
  </Card>
);

// PropTypes validation
SingleProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectDates: PropTypes.array,
  userHasVoted: PropTypes.bool.isRequired,
};

SingleProjectCard.defaultProps = {
  projectDates: [],
};

/**
 * Export
 */
export default SingleProjectCard;
