/**
 * NPM import
 */
import React from 'react';
import {
  Button,
  Checkbox,
  Form,
  Icon,
} from 'semantic-ui-react';

/**
 * Local import
 */
// Style
import './signup.scss';

/**
 * Code
 */
const signup = () => (
  <div id="signup">
    <Form id="signup-form">
      <div id="signup-form-title">
        Inscription
      </div>
      <Form.Field>
        <label htmlFor="firstname">
          Prénom
          <input type="text" placeholder="Prénom" />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="lastname">
          Nom
          <input type="text" placeholder="Nom" />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="email">
          Email
          <input type="email" placeholder="Email" />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="password">
          Mot de passe
          <input type="password" placeholder="Mot de passe" />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="confirm-password">
          Confirmez votre mot de passe
          <input type="password" placeholder="Confirmez votre mot de passe" />
        </label>
      </Form.Field>
      <Form.Field>
        <Checkbox label="J'accepte les termes et conditions" />
      </Form.Field>
      <div id="signup-form-buttons">
        <Button type="submit" animated="vertical">
          <Button.Content visible>J'ai déjà un compte</Button.Content>
          <Button.Content hidden>
            <Icon name="user" />
          </Button.Content>
        </Button>
        <Button animated color="green">
          <Button.Content visible>S'inscrire</Button.Content>
          <Button.Content hidden>
            <Icon name="angle double right" />
          </Button.Content>
        </Button>
      </div>
    </Form>
  </div>
);

/**
 * Export
 */
export default signup;
