/**
 * NPM IMPORT
 */
import React from 'react';

/**
 * Local import
 */
import './newproject.scss';

/**
 * Code
 */
const NewProject = () => (
  <div id="newproject">
    <div id="newproject-banner">
      <h1>Créer un projet</h1>
    </div>
    <form id="newproject-form" action="">
      <div id="newproject-title">
        <p>Titre du projet</p>
        <div className="ui input">
          <input type="text" placeholder="Donnez un nom a votre projet..." />
        </div>
      </div>
      <div id="newproject-description">
        <p>description</p>
        <div className="ui input">
          <textarea
            id="description-input"
            type="text"
            placeholder="Description du projet..."
            rows="5"
            cols="50"
          />
        </div>
      </div>
      <div id="newproject-dates">
        <p>Suggérer des dates</p>
        <div id="newproject-date" className="ui input">
          <input type="date" placeholder="Date de debut..." />
          <input type="date" placeholder="Date de fin..." />
        </div>
      </div>
      <div id="newproject-destination">
        <p>Destination</p>
        <div className="ui input">
          <input type="text" placeholder="Définissez une destionation..." />
        </div>
      </div>
      <div id="newproject-participants">
        <p>Ajouter des participants</p>
        <div className="ui left icon input">
          <input type="text" placeholder="Pseudo du participant..." />
          <i className="users icon" />
        </div>
      </div>
      <button id="newproject-button" type="button" className="ui right labeled icon button"><i className="right arrow icon" /> Créer le projet </button>
    </form>
  </div>
);

/**
 * Export
 */
export default NewProject;
