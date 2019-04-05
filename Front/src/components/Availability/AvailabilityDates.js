/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Radio, Button, Icon } from 'semantic-ui-react';
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
import SingleDateButton from './singleDateButton';

/**
 * Code
 */
class Availability extends React.Component {
  componentDidMount() {}

  /**
   * Render
   */
  render() {
    const { project } = this.props;

    return (
      <div id="availability">
        <div id="availability-banner">
          <h1>Définir mes disponibilités</h1>
        </div>
        <div id="availability-main">
          <div id="availability-content">
            <h2>Sélectionner vos disponibilités parmi les dates suivantes:</h2>
          </div>
          <div id="availability-buttons">
            {project.projectDates.map((date, index) => (
              <SingleDateButton
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                {...date}
              />
            ))}
          </div>
          <div id="availability-checkbox">
            <h3><Radio toggle />Je ne suis pas disponible aux dates proposées</h3>
          </div>
          <NavLink
            to={getURL('/idees', project.title)}
            key={project.id}
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
  }
}

// PropTypes validation
Availability.propTypes = {
  project: PropTypes.shape({
    projectDates: PropTypes.array,
  }),
};

Availability.defaultProps = {
  project: PropTypes.shape({
    projectDates: [],
  }),
};

/**
 * Export
 */
export default Availability;
