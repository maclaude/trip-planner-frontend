/**
 * NPM import
 */
import React from 'react';
import { Form, Icon, Button } from 'semantic-ui-react';

/**
 * Local import
 */
import './add_participants.scss';

/**
 * Code
 */
const AddParticipants = () => (
  <div id="addParticipants">
    <div id="addParticipants-banner">
      <h1>Ajouter des participants</h1>
    </div>
    <Form id="addParticipants-form">
      <Form.Field>
        <label htmlFor="email">
          <input
            name="email"
            type="email"
            placeholder="Email du participant"
          />
        </label>
      </Form.Field>
      <Button
        animated
        floated="right"
        type="submit"
        color="green"
      >
        <Button.Content visible>Envoyer l'invitation</Button.Content>
        <Button.Content hidden>
          <Icon name="paper plane" />
        </Button.Content>
      </Button>
    </Form>
    <div id="addParticipants-participants">
      <h2>Participants du projet</h2>
    </div>
  </div>
);

/**
 * Export
 */
export default AddParticipants;
