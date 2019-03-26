/**
 * NPM IMPORT
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
      debutDates,
      endDates,
      destination,
      showErrors,
      newProject,
    } = this.props;

    const errors = NewProjectErrors(
      title,
      description,
      debutDates,
      endDates,
      destination,
    );
    if (
      (title && description && destination && debutDates && endDates !== '')
    ) {
      newProject();
    }
    else {
      showErrors(errors);
    }
  };

  handleClick = () => {
    const { addDates } = this.props;

    addDates();
  };
  
  render() {
    const {
      title,
      description,
      debutDates,
      endDates,
      destination,
      user,
      errors,
      dateSuggest,
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
            <div id="newproject-date">
              <p>Suggérer des dates</p>
              <Input
                name="debutDates"
                className="input-date"
                type="date"
                value={debutDates}
                onChange={this.handleChange}
              />
              <Input
                name="endDates"
                className="input-date"
                type="date"
                value={endDates}
                onChange={this.handleChange}
              />
              <Button type="button" icon>
                <Icon
                  name="plus"
                  onClick={this.handleClick}
                />
              </Button>
            </div>
            <div id="newproject-date-suggested">
              <ul id="date-list">
                {/* <Dates /> */}
              </ul>
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
            <div id="newproject-participants">
              <p>Ajouter des participants</p>
              <div className="input">
                <Input
                  name="user"
                  icon="users"
                  placeholder="Pseudo du participant..."
                  value={user}
                  onChange={this.handleChange}
                />
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
      </div>
    );
  }
}

// PropTypes validation
NewProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  debutDates: PropTypes.string,
  endDates: PropTypes.string,
  destination: PropTypes.string.isRequired,
  user: PropTypes.string,
  changeInput: PropTypes.func.isRequired,
  newProject: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  showErrors: PropTypes.func.isRequired,
  addDates: PropTypes.func.isRequired,
};

NewProject.defaultProps = {
  user: '',
  debutDates: '',
  endDates: '',
};

/**
 * Export
 */
export default NewProject;
