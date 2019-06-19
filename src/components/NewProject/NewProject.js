/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Form,
  Button,
  Icon,
  FormField,
  Message,
} from 'semantic-ui-react';
import { FaUserPlus, FaCalendarPlus } from 'react-icons/fa';
import toast from 'toasted-notes';
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
  componentWillMount() {
    const { clearState } = this.props;
    clearState();
  }

  componentDidUpdate() {
    const { responseMessage } = this.props;

    if (responseMessage !== '') {
      toast.notify(
        <p id="toast-alert">
          <Icon name="check" color="green" size="large" /> Votre projet à bien été crée !
        </p>,
        {
          position: 'top-right',
          duration: 3000,
        },
      );
    }
  }

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
      id,
      title,
      description,
      destination,
      errors,
      responseMessage,
    } = this.props;

    return (
      <div id="newproject">
        <div id="newproject-banner">
          <h1>Créer un projet</h1>
        </div>
        {(responseMessage === '') && (
          <div id="newproject-container">
            <div id="newproject-form">
              <Form
                onSubmit={this.handleSubmit}
              >
                <FormField>
                  <label htmlFor="title">
                    Nom du projet <span className="asterisk">*</span>
                    <input
                      name="title"
                      placeholder="Donnez un nom a votre projet"
                      value={title}
                      onChange={this.handleChange}
                    />
                  </label>
                </FormField>
                <FormField>
                  <label htmlFor="description">
                    Description <span className="asterisk">*</span>
                    <textarea
                      name="description"
                      id="description-input"
                      placeholder="Description de votre projet"
                      rows="5"
                      cols="50"
                      value={description}
                      onChange={this.handleChange}
                    />
                  </label>
                </FormField>
                <FormField>
                  <label htmlFor="destination">
                    Destination<span className="asterisk">*</span>
                    <input
                      name="destination"
                      placeholder="Définissez une destination"
                      value={destination}
                      onChange={this.handleChange}
                    />
                  </label>
                </FormField>
                {(errors.length > 0) && (
                  <div>
                    {errors.map(error => (
                      <Message negative key={error}>
                        <p>{error}</p>
                      </Message>
                    ))}
                  </div>
                )}
                <Button
                  animated
                  color="green"
                  type="submit"
                  floated="right"
                  className="newproject-button"
                >
                  <Button.Content visible>Créer le projet</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Form>
            </div>
          </div>
        )}

        {(responseMessage !== '') && (
          <div id="project-created">
            <h2 id="project-created-title">Vous venez de créer le projet <span>{title}</span></h2>
            <div id="project-created-functionalities">
              <NavLink
                to={getURL('/participants', title)}
                key={uuidV4()}
                exact
              >
                <div className="functionality-button functionality-button-add-participants">
                  <p>Ajouter des participants</p>
                  <FaUserPlus />
                </div>
              </NavLink>
              <NavLink
                to={getURL('/dates', title)}
                key={uuidV4()}
                exact
              >
                <div className="functionality-button functionality-button-suggest-dates">
                  <p>Suggérer des dates</p>
                  <FaCalendarPlus />
                </div>
              </NavLink>
            </div>
          </div>
        )}
        <UserFooter />
      </div>
    );
  }
}

// PropTypes validation
NewProject.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  responseMessage: PropTypes.string.isRequired,
  clearState: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  getDestinationCoordinates: PropTypes.func.isRequired,
  showErrors: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default NewProject;
