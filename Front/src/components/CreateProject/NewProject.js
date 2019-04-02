/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Icon,
  Input,
  TextArea,
  Form,
  Message,
} from 'semantic-ui-react';

/**
 * Local import
 */
import './newproject.scss';

// Utils
import NewProjectErrors from 'src/utils/newProject_form_errors';

/**
 * Code
 */
class NewProject extends React.Component {
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
            <div id="newproject-title">
              <p>Titre du projet</p>
              <div className="input">
                <Input
                  name="title"
                  placeholder="Donnez un nom a votre projet..."
                  value={title}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div id="newproject-description">
              <p>Description</p>
              <div className="input">
                <TextArea
                  name="description"
                  id="description-input"
                  placeholder="Description du projet..."
                  rows="5"
                  cols="50"
                  value={description}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div id="newproject-destination">
              <p>Destination</p>
              <div className="input">
                <Input
                  name="destination"
                  icon="world"
                  placeholder="Définissez une destionation..."
                  value={destination}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            {(errors.length > 0) && (
              <div id="signup-form-errors">
                {errors.map(error => (
                  <Message negative key={error}>
                    <p>
                      {error}
                    </p>
                  </Message>
                ))}
              </div>
            )}
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
