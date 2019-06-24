/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Utils
import { getURL } from 'src/utils/url';
// Styles
import './availability.scss';
// Components
import UserFooter from 'src/components/UserFooter';
import SingleDateButton from 'src/containers/Availability/SingleDateButton';

/**
 * Code
 */
const Availability = ({ project }) => (
  <div id="availability">
    <div id="availability-banner">
      <h1>Définir mes disponibilités</h1>
    </div>
    <div id="availability-main">
      <h2 id="availability-main-title">
        Sélectionner vos disponibilités:
      </h2>
      <div id="availability-main-dates-suggested">
        {project.dates.map(date => (
          <SingleDateButton
            key={date._id}
            {...date}
          />
        ))}
      </div>
      <NavLink
        to={getURL('/idees', project.title)}
        key={project._id}
        exact
      >
        <Button animated floated="right" color="green" id="availability-next">
          <Button.Content visible>Étape suivante</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </NavLink>
    </div>
    <UserFooter />
  </div>
);

// PropTypes validation
Availability.propTypes = {
  project: PropTypes.shape({
    dates: PropTypes.array,
  }),
};

Availability.defaultProps = {
  project: PropTypes.shape({
    dates: [],
  }),
};

/**
 * Export
 */
export default Availability;
