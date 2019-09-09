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
// Styles
import './availability.scss';
// Components
import UserFooter from 'src/components/UserFooter';
import SingleDateButton from 'src/containers/Availability/SingleDateButton';

/**
 * Code
 */
const Availability = ({ project }) => (
  <div className="user-container" id="availability">

    <div className="user-container__menu">
      <div className="hamburger" />
    </div>

    <div className="user-container__banner">
      <h1>Disponibilités</h1>
    </div>

    <section className="user-container__main" id="availability-section">
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
        <button
          type="button"
          className="
            form__button
            form__button--red
            form__button--right
          "
        >
         Etape suivante
        </button>
      </NavLink>
    </section>

    <UserFooter />

  </div>
);

// PropTypes validation
Availability.propTypes = {
  project: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
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
