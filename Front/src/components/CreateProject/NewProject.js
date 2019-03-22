/**
 * NPM IMPORT
 */
import React from 'react';
import {
  Button,
  Icon,
  Input,
  TextArea,
  Form,
} from 'semantic-ui-react';

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
    <div id="newproject-container">
      <Form id="newproject-form" action="">
        <div id="newproject-title">
          <p>Titre du projet</p>
          <div className="input">
            <Input placeholder="Donnez un nom a votre projet..." />
          </div>
        </div>
        <div id="newproject-description">
          <p>Description</p>
          <div className="input">
            <TextArea
              id="description-input"
              placeholder="Description du projet..."
              rows="5"
              cols="50"
            />
          </div>
        </div>
        <div id="newproject-date">
          <p>Suggérer des dates</p>
          <Input className="input-date" type="date" placeholder="Date de debut..." />
          <Input className="input-date" type="date" placeholder="Date de fin..." />
        </div>
        <div id="newproject-destination">
          <p>Destination</p>
          <div className="input">
            <Input icon="world" placeholder="Définissez une destionation..." />
          </div>
        </div>
        <div id="newproject-participants">
          <p>Ajouter des participants</p>
          <div className="input">
            <Input icon="users" placeholder="Pseudo du participant..." />
          </div>
        </div>
        <Button animated id="newproject-button">
          <Button.Content visible>Créer le projet</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Form>
    </div>
  </div>
);

/**
 * Export
 */
export default NewProject;
