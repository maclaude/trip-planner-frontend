/**
 * NPM IMPORT
 */
import React from 'react';
import { Radio, Button, Icon } from 'semantic-ui-react';

/**
 * Local import
 */
import './availability.scss';

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
      <div id="availability-button">
        <button className="button" type="button"><span>Du 15 au 22 Juillet 2019</span></button>
        <button className="button" type="button"><span>Du 22 au 29 Juillet 2019</span></button>
        <button className="button" type="button"><span>Du 03 au 10 Aout 2019</span></button>
      </div>
      <div id="availability-checkbox">
        <h3><Radio toggle /> Je ne suis pas disponible aux dates proposées</h3>
      </div>
      <Button animated id="availability-next">
        <Button.Content visible>Etape suivante</Button.Content>
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
