/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Icon,
  Button,
  List,
  Image,
  Divider,
} from 'semantic-ui-react';

/**
 * Local import
 */
// Style
import './add_participants.scss';
// Assets
import avatar from 'src/assets/avatar/default.png';

/**
 * Code
 */
const AddParticipants = ({ project }) => (
  <div id="addParticipants">
    <div id="addParticipants-banner">
      <h1>Ajouter des participants</h1>
    </div>
    <Form id="addParticipants-form">
      <Form.Field>
        <label htmlFor="name">
          Nom
          <input
            name="email"
            type="text"
            placeholder="Nom du participant"
          />
        </label>
        <label htmlFor="email">
          Email
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

    <Divider />

    <div id="addParticipants-participants">
      <h2 id="addParticipants-participants-title">Participants</h2>
      <div id="addParticipants-participants-container">
        <div id="addParticipants-participants-container-confirmed">
          <h3>Confirmé</h3>
          <List
            id="addParticipants-participants-container-list"
            animated
            verticalAlign="middle"
            size="big"
          >
            {project.user.map((user, index) => (
              <List.Item
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                <Image avatar src={avatar} />
                <List.Content>
                  <List.Header>{user}</List.Header>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </div>
        <div id="addParticipants-participants-container-pending">
          <h3>En attente</h3>
        </div>
      </div>
    </div>
  </div>
);

// PropTypes validation
AddParticipants.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.array.isRequired,
  }).isRequired,
};

/**
 * Export
 */
export default AddParticipants;
