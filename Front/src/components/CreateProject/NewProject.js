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
} from 'semantic-ui-react';

/**
 * Local import
 */
import './newproject.scss';

/**
 * Code
 */
class NewProject extends React.Component {

  handleChange = (evt) => {
    const { name, value } = evt.target;
    const { changeInput } = this.props;
    changeInput(name, value);
    console.log('changement de linput');
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log('formulaire sousmis');
  };


  render() {
    const {
      title,
      description,
      debutDates,
      endDates,
      destination,
      participants,
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
                  name="participants"
                  icon="users"
                  placeholder="Pseudo du participant..."
                  value={participants}
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
      </div>
    );
  }
}

// PropTypes validation
NewProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  debutDates: PropTypes.string.isRequired,
  endDates: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  participants: PropTypes.array.isRequired,
  changeInput: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default NewProject;
