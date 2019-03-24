/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Button,
  Icon,
  Input,
  FormField,
  Message,
} from 'semantic-ui-react';

/**
 * Local import
 */
// Utils
import getSuggestionFormErrors from 'src/utils/suggestion_form_errors';

/**
 * Code
 */
class SuggestionForm extends React.Component {
  /**
   * Handlers
   */
  handleOptionChange = (evt, data) => {
    const { changeType } = this.props;

    const newType = data.value;

    changeType(newType);
  }

  handleInputChange = (evt) => {
    const { name, value } = evt.target;

    const { changeInput } = this.props;

    changeInput(name, value);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const {
      type,
      title,
      sendSuggestion,
      showErrors,
    } = this.props;

    // Gestion des erreurs
    const errors = getSuggestionFormErrors(type, title);

    if (type && title !== '') {
      // eslint-disable-next-line no-console
      console.log('SuggestionForm :: handleSubmit');
      sendSuggestion();
    }
    else {
      showErrors(errors);
    }
  }

  render() {
    const options = [
      { key: 'activity', text: 'Activité', value: 'activity' },
      { key: 'accomodation', text: 'Hebergement', value: 'accomodation' },
      { key: 'transport', text: 'Transport', value: 'transport' },
      { key: 'restaurant', text: 'Restaurant', value: 'restaurant' },
      { key: 'others', text: 'Autres', value: 'others' },
    ];

    const {
      title,
      description,
      link,
      price,
      errors,
    } = this.props;

    return (
      <div id="suggestions">
        <div id="suggestions-banner">
          <h1>Idées du groupe</h1>
        </div>
        <Form
          id="suggestions-form"
          onSubmit={this.handleSubmit}
        >
          <div id="suggestions-form-up">
            <h2 id="suggestions-form-up-title">
              Soumettre une idée concernant
            </h2>
            <Form.Field id="suggestion-form-up-options">
              <Form.Select
                name="type"
                placeholder="Type"
                options={options}
                onChange={this.handleOptionChange}
              />
            </Form.Field>
          </div>
          <div id="suggestion-form-details">
            <FormField>
              <label htmlFor="title">
                Titre
                <input
                  type="text"
                  name="title"
                  placeholder="Votre idée"
                  value={title}
                  onChange={this.handleInputChange}
                />
              </label>
            </FormField>
            <Form.TextArea
              label="description"
              name="description"
              placeholder="Votre description"
              value={description}
              onChange={this.handleInputChange}
            />
            <FormField>
              <label htmlFor="idea-link">
                Lien
                <input
                  type="text"
                  name="link"
                  placeholder="Lien"
                  value={link}
                  onChange={this.handleInputChange}
                />
              </label>
            </FormField>
            <FormField width={8}>
              <Input
                label="Prix"
                type="number"
                name="price"
                icon="euro sign"
                value={price}
                onChange={this.handleInputChange}
              />
            </FormField>
          </div>

          {(errors.length > 0) && (
            <div id="suggestions-form-errors">
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
            basic
            color="black"
            type="submit"
            floated="right"
            onClick={this.handleSubmit}
          >
            <Button.Content visible>Envoyer</Button.Content>
            <Button.Content hidden>
              <Icon name="paper plane" />
            </Button.Content>
          </Button>
        </Form>
      </div>
    );
  }
}

// PropTypes validation
SuggestionForm.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  changeInput: PropTypes.func.isRequired,
  changeType: PropTypes.func.isRequired,
  showErrors: PropTypes.func.isRequired,
  sendSuggestion: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default SuggestionForm;
