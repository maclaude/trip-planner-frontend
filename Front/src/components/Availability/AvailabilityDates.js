/**
 * Npm import
 */
import React from 'react';
import { Radio, Button, Icon } from 'semantic-ui-react';
import classNames from 'classnames';

/**
 * Local import
 */
// Styles
import './availability.scss';
// Data
import avaibility from 'src/data/availability';

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

  const { filteredDates } = this.props;

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
          {filteredDates.map(date => (
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
              Du {date.starDate} au {date.endDate}
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
    </div>
  );
}
}

/**
 * Export
 */
export default Availability;
