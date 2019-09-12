/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaUserPlus, FaCalendarPlus } from 'react-icons/fa';
import uuidV4 from 'uuid/v4';

/**
 * Local import
 */
// Components
import UserFooter from 'src/components/UserFooter';
// Styles
import './newproject.scss';
// Utils
import NewProjectErrors from 'src/utils/newProject_form_errors';
import { getURL } from 'src/utils/url';

/**
 * Code
 */
class NewProject extends React.Component {
  /**
   * Lifecycles
   */
  componentDidMount() {
    const { clearProjectState } = this.props;
    clearProjectState();
  }

  componentDidUpdate() {
    const { serverResponseMessage } = this.props;

    if (serverResponseMessage === 'Project created') {
      // Toast alert
    }
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
      title,
      description,
      destination,
      showErrors,
      getDestinationCoordinates,
    } = this.props;

    const errors = NewProjectErrors(
      title,
      description,
      destination,
    );
    if (
      (title && description && destination !== '')
    ) {
      getDestinationCoordinates();
    }
    else {
      showErrors(errors);
    }
  };

  /**
   * Render
   */
  render() {
    const {
      title,
      description,
      destination,
      errors,
      serverResponseMessage,
    } = this.props;

    return (
      <div className="user-container" id="newproject">

        <div className="user-container__menu">
          <div className="hamburger" />
        </div>

        <div className="user-container__banner">
          <h1>Nouveau projet</h1>
        </div>

        {(serverResponseMessage === '') && (
          <section className="user-container__main">

            <div id="newproject-form">
              <form
                className="form__container"
                onSubmit={this.handleSubmit}
              >

                <div className="field">
                  <label htmlFor="title" className="field__label">
                    Nom du projet <strong className="asterisk">*</strong>
                  </label>
                  <input
                    name="title"
                    className="field__input"
                    placeholder="Donnez un nom à votre projet"
                    value={title}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="field">
                  <label htmlFor="description" className="field__label">
                    Description <strong className="asterisk">*</strong>
                  </label>
                  <textarea
                    name="description"
                    className="field__input"
                    placeholder="Description de votre projet"
                    value={description}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="field">
                  <label htmlFor="destination" className="field__label">
                    Destination <strong className="asterisk">*</strong>
                  </label>
                  <input
                    name="destination"
                    className="field__input"
                    placeholder="Définissez une destination"
                    value={destination}
                    onChange={this.handleInputChange}
                  />
                </div>

                {(errors.length > 0) && (
                  <div>
                    {errors.map(error => (
                      <div className="form__error" key={error}>
                        <p>{error}</p>
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
                  Créer le projet
                </button>
              </form>
            </div>

          </section>
        )}

        {(serverResponseMessage !== '') && (
          <section className="user-container__main" id="project-created">
            <h2 id="project-created__title">Vous venez de créer le projet <strong>{title}</strong></h2>
            <div className="project-created__options">
              <NavLink
                to={getURL('/dates', title)}
                key={uuidV4()}
                exact
                className="
                  button
                  button--large
                  button-suggest-dates
                "
              >
                <p>Suggérer des dates</p>
                <FaCalendarPlus />
              </NavLink>
              <NavLink
                to={getURL('/participants', title)}
                key={uuidV4()}
                exact
                className="
                  button
                  button--large
                  button-add-participants
                "
              >
                <p>Ajouter des participants</p>
                <FaUserPlus />
              </NavLink>
            </div>
          </section>
        )}

        <UserFooter />

      </div>
    );
  }
}

// PropTypes validation
NewProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  serverResponseMessage: PropTypes.string.isRequired,
  clearProjectState: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  getDestinationCoordinates: PropTypes.func.isRequired,
  showErrors: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default NewProject;
