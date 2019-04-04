/**
 * Npm import
 */
import React from 'react';
import { Radio, Button, Icon } from 'semantic-ui-react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Styles
import './availability.scss';
// Components
import UserFooter from 'src/components/UserFooter';
// Utils
import getDateFormat from 'src/utils/date_format';

/**
 * Code
 */
class Availability extends React.Component {
state = {
  isApproved: false,
}

/**
 * Handlers
 */
handleClick = (evt) => {
  const { name } = evt.target;
  // eslint-disable-next-line no-console
  console.log(name);

  const { isApproved } = this.state;
  if (!isApproved) {
    this.setState({
      isApproved: true,
    });
  }
  else if (isApproved) {
    this.setState({
      isApproved: false,
    });
  }
}

render() {
  const {
    isApproved,
  } = this.state;

  const { project } = this.props;

  return (
    <div id="availability">
      <div id="availability-banner">
        <h1>Définir mes disponibilités</h1>
      </div>
      <div id="avaibility-main">
        <div id="availability-content">
          <h2>Sélectionner ses disponibilités parmi les dates suivantes</h2>
        </div>
        <div id="availability-buttons">
          {project.projectDates.map(date => (
            <button
              className={classNames(
                'availability-button',
                { 'availability-button--active': isApproved },
              )}
              type="button"
              onClick={this.handleClick}
              key={date.id}
              name={date.id}
            >
              {`Du ${getDateFormat(date.starDate)} au ${getDateFormat(date.endDate)}`}
            </button>
          ))}
        </div>
        <div id="availability-checkbox">
          <h3><Radio toggle /> Je ne suis pas disponible aux dates proposées</h3>
        </div>
        <Button animated id="availability-next">
          <Button.Content visible>Étape suivante</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
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
