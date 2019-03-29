/**
 * Npm import
 */
import React from 'react';
import { Radio, Button, Icon } from 'semantic-ui-react';

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
const Availability = () => (
  <div id="availability">
    <div id="availability-banner">
      <h1>Définir mes disponibilités</h1>
    </div>
    <div id="avaibility-main">
      <div id="availability-content">
        <h2>Sélectionner ses disponibilités parmi les dates suivantes</h2>
      </div>
      <div id="availability-buttons">
        {avaibility.map(date => (
          <button className="availability-button" type="button">
            <span>
              Du {date.starDate} au {date.endDate}
            </span>
          </button>
        ))}
      </div>
      <div id="availability-checkbox">
        <h3><Radio toggle />Je ne suis pas disponible aux dates proposées</h3>
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

/**
 * Export
 */
export default Availability;
