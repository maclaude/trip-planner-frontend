/**
 * NPM IMPORT
 */
import React from 'react';

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
    <div id="main">
      <div id="availability-content">
        <h2>Sélectionner ses disponibilités parmi les dates suivantes</h2>
      </div>
      <div id="availability-button">
        <button className="button" type="button"><span>Du 15 au 22 Juillet 2019</span></button>
        <button className="button" type="button"><span>Du 22 au 29 Juillet 2019</span></button>
        <button className="button" type="button"><span>Du 03 au 10 Aout 2019</span></button>
      </div>
      <div id="availability-checkbox">
        <h3><input type="checkbox" /> Je ne suis pas disponible aux dates proposées</h3>
      </div>
      <div id="availability-next" className="ui animated button">
        <div className="visible content">Etape suivante</div>
        <div className="hidden content">
          <i className="right arrow icon" />
        </div>
      </div>
    </div>

  </div>
);

/**
 * Export
 */
export default Availability;
