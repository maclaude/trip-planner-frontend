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
// Utils
import getParticipantsFormErrors from 'src/utils/participants_form_errors';
// Components
import UserFooter from 'src/components/UserFooter';

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

    // Handling errors
    const errors = getParticipantsFormErrors(name, email);

    if (name && email !== '') {
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
    } = this.props;

    return (
      <div className="user-container" id="addParticipants">

        <div className="user-container__menu">
          <div className="hamburger" />
        </div>

        <div className="user-container__banner">
          <h1>Ajouter des participants</h1>
        </div>

        <section className="user-container__section-1">
          <Form
            id="addParticipants-form"
            onSubmit={this.handleSubmit}
          >
            <Form.Field>
              <label htmlFor="name">
                Nom <strong className="asterisk">*</strong>
                <input
                  className="addParticipants-form__input"
                  name="name"
                  type="text"
                  placeholder="Nom du participant"
                  value={name}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="email">
                Email <strong className="asterisk">*</strong>
                <input
                  className="addParticipants__input"
                  name="email"
                  type="email"
                  placeholder="Email du participant"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>
            </Form.Field>

            {(errors.length > 0) && (
              <div id="addParticipants-form__errors">
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
        </section>

        <section className="user-container__section-2" id="addParticipants-section">
          <h2 id="addParticipants-section__title">Participants</h2>
          <div id="addParticipants-section__container">
            <div id="addParticipants-section__container--confirmed">
              <h3>Confirmé</h3>
              <List
                id="addParticipants-section__container-list"
                animated
                verticalAlign="middle"
                size="big"
              >
                {project.participants.map(participant => (
                  <List.Item
                    key={participant._id}
                  >
                    <Image avatar src={participant.avatar} />
                    <List.Content>
                      <List.Header>{participant.firstname}</List.Header>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </div>
            <div id="addParticipants-section__container--pending">
              <h3>En attente</h3>
              <List
                id="addParticipants-section__container-list"
                animated
                verticalAlign="middle"
                size="big"
              >
                {/* {invitedParticipants.map(participant => (
                  <List.Item
                    key={email}
                  >
                    <Image avatar src={avatar} />
                    <List.Content>
                      <List.Header>{participant.name}</List.Header>
                    </List.Content>
                  </List.Item>
                ))} */}
              </List>
            </div>
          </div>
        </section>

        <UserFooter />
      </div>
    );
  }
}

// PropTypes validation
AddParticipants.propTypes = {
  project: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  changeInput: PropTypes.func.isRequired,
  showErrors: PropTypes.func.isRequired,
  sendInvitation: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default AddParticipants;
