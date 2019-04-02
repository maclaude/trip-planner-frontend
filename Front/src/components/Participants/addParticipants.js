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
  Message,
} from 'semantic-ui-react';

/**
 * Local import
 */
// Style
import './add_participants.scss';
// Assets
import avatar from 'src/assets/avatar/default.png';
// Utils
import getParticipantsFormErrors from 'src/utils/participants_form_errors';

/**
 * Code
 */
class AddParticipants extends React.Component {
  /**
   * Handlers
   */
  handleChange = (evt) => {
    const { name, value } = evt.target;

    const { changeInput } = this.props;

    changeInput(name, value);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const {
      name,
      email,
      showErrors,
      sendInvitation,
    } = this.props;

    // Gestion des erreurs
    const errors = getParticipantsFormErrors(name, email);

    if (name && email !== '') {
      // eslint-disable-next-line no-console
      console.log('AddParticipants :: handleSubmit');
      sendInvitation();
    }
    else {
      showErrors(errors);
    }
  }

  /**
   * Render
   */
  render() {
    const {
      project,
      name,
      email,
      errors,
      invitedParticipants,
    } = this.props;

    return (
      <div id="addParticipants">
        <div id="addParticipants-banner">
          <h1>Ajouter des participants</h1>
        </div>
        <Form
          id="addParticipants-form"
          onSubmit={this.handleSubmit}
        >
          <Form.Field>
            <label htmlFor="name">
              Nom
              <input
                className="addParticipants-form-input"
                name="name"
                type="text"
                placeholder="Nom du participant"
                value={name}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                className="addParticipants-form-input"
                name="email"
                type="email"
                placeholder="Email du participant"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </Form.Field>

          {(errors.length > 0) && (
            <div id="addParticipants-form-errors">
              {errors.map(error => (
                <Message negative key={error}>
                  <p>
                    {error}
                  </p>
                </Message>
              ))}
            </div>
          )}

          <Button
            animated
            floated="right"
            type="submit"
            color="green"
          >
            <Button.Content visible>
              Envoyer l'invitation
            </Button.Content>
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
              <List
                id="addParticipants-participants-container-list"
                animated
                verticalAlign="middle"
                size="big"
              >
                {invitedParticipants.map(participant => (
                  <List.Item
                    key={email}
                  >
                    <Image avatar src={avatar} />
                    <List.Content>
                      <List.Header>{participant.name}</List.Header>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// PropTypes validation
AddParticipants.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.array.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  changeInput: PropTypes.func.isRequired,
  showErrors: PropTypes.func.isRequired,
  sendInvitation: PropTypes.func.isRequired,
  invitedParticipants: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default AddParticipants;
