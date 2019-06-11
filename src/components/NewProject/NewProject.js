/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Button,
  Icon,
  FormField,
  Message,
} from 'semantic-ui-react';

/**
 * Local import
 */
// Components
import UserFooter from 'src/components/UserFooter';
// Styles
import './newproject.scss';
// Utils
import NewProjectErrors from 'src/utils/newProject_form_errors';

/**
 * Code
 */
class NewProject extends React.Component {
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
      newProject,
    } = this.props;

    const errors = NewProjectErrors(
      title,
      description,
      destination,
    );
    if (
      (title && description && destination !== '')
    ) {
      newProject();
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
    } = this.props;

    return (
      <div id="newproject">
        <div id="newproject-banner">
          <h1>Créer un projet</h1>
        </div>
        <div id="newproject-container">
          <Form
            id="newproject-form"
            action=""
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
              <div id="signup-form-errors">
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
  changeInput: PropTypes.func.isRequired,
  newProject: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  showErrors: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default NewProject;
