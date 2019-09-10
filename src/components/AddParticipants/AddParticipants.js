/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

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
   * Lifecycle
   */
  componentDidMount() {
    const { clearParticipantsState } = this.props;
    clearParticipantsState();
  }

  /**
   * Handlers
   */
  handleInputChange = evt => {
    const { name, value } = evt.target;
    const { changeInput } = this.props;

    changeInput(name, value);
  }

  handleSubmit = evt => {
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
      <div className="user-container" id="add-participants">

        <div className="user-container__menu">
          <div className="hamburger" />
        </div>

        <div className="user-container__banner">
          <h1>Ajouter des participants</h1>
        </div>

        <section className="user-container__section-1">

          <div id="add-participants-form">
            <form
              className="form__container"
              onSubmit={this.handleSubmit}
            >
              <div className="field">
                <label htmlFor="name" className="field__label">
                  Nom <strong className="asterisk">*</strong>
                </label>
                <input
                  name="name"
                  className="field__input"
                  placeholder="Nom du participant"
                  value={name}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="field">
                <label htmlFor="email" className="field__label">
                  Email <strong className="asterisk">*</strong>
                </label>
                <input
                  type="email"
                  name="email"
                  className="field__input"
                  placeholder="Email du participant"
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>

              {(errors.length > 0) && (
                <div>
                  {errors.map(error => (
                    <div className="form__error" key={error}>
                      <p>
                        {error}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <button
                type="submit"
                className="
                  form__button
                  form__button--right
                  form__button--red"
              >
                Envoyer l'invitation
              </button>
            </form>
          </div>

        </section>

        <section className="user-container__section-2" id="add-participants-section">

          <h2 id="add-participants-section__title">Participants</h2>

          <div id="add-participants-section__container">

            <div id="add-participants-section__container--confirmed">
              <h3>Confirmé</h3>
              <ul id="add-participants-section__container-list">
                {project.participants.map(participant => (
                  <li key={participant._id}>
                    {participant.firstname}
                  </li>
                ))}
              </ul>
            </div>

            <div id="add-participants-section__container--pending">
              <h3>En attente</h3>
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
    participants: PropTypes.array.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  clearParticipantsState: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  showErrors: PropTypes.func.isRequired,
  sendInvitation: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default AddParticipants;
