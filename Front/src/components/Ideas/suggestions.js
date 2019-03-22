/**
 * NPM import
 */
import React from 'react';
import {
  Form,
  Button,
  Icon,
  Input,
  FormField,
} from 'semantic-ui-react';

/**
 * Local import
 */

/**
 * Code
 */
const Suggestions = () => {
  const options = [
    { key: 'activity', text: 'Activité', value: 'activity' },
    { key: 'accomodation', text: 'Hebergement', value: 'accomodation' },
    { key: 'transport', text: 'Transport', value: 'transport' },
    { key: 'restaurant', text: 'Restaurant', value: 'restaurant' },
    { key: 'others', text: 'Autres', value: 'others' },
  ];

  return (
    <div id="suggestions">
      <div id="suggestions-banner">
        <h1>Idées du groupe</h1>
      </div>
      <Form id="suggestions-form">
        <div id="suggestions-form-up">
          <h2 id="suggestions-form-up-title">
            Soumettre une idée concernant
          </h2>
          <Form.Field id="suggestion-form-up-options">
            <Form.Select placeholder="Type" options={options} />
          </Form.Field>
        </div>
        <div id="suggestion-form-details">
          <FormField>
            <label htmlFor="idea-title">
              Titre
              <input
                type="text"
                name="idea-title"
                placeholder="Votre idée"
              />
            </label>
          </FormField>
          <FormField>
            <label htmlFor="idea-link">
              Lien
              <input
                type="text"
                name="idea-link"
                placeholder="Lien"
              />
            </label>
          </FormField>
          <Form.TextArea
            label="Votre description"
            name="idea-description"
            placeholder="Description"
          />
          <FormField width={8}>
            <Input
              label="Prix"
              type="text"
              name="idea-price"
              icon="euro sign"
              iconPosition="right"
            />
          </FormField>
        </div>
        <Button
          animated
          basic
          color="black"
          type="submit"
          floated="right"
        >
          <Button.Content visible>Soumettre</Button.Content>
          <Button.Content hidden>
            <Icon name="paper plane" />
          </Button.Content>
        </Button>
      </Form>
    </div>
  );
};

/**
 * Export
 */
export default Suggestions;
