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
  <main className="user-main" id="availability">

    <h1 className="user-main__title">Définir mes disponibilités</h1>

    <section id="availability-section">
      <h2 id="availability-section__title">
        Sélectionner vos disponibilités:
      </h2>
      <div id="availability-section__content">
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
        <Button animated floated="right" color="green">
          <Button.Content visible>Étape suivante</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </NavLink>
    </section>

    <UserFooter />

  </main>
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
