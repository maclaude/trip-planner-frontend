/**
 * NPM import
 */
import React from 'react';
import {
  Button,
  Form,
  Icon,
} from 'semantic-ui-react';

/**
 * Local import
 */
// Style
import './login.scss';

/**
 * Code
 */
const login = () => (
  <div id="login">
    <Form id="login-form">
      <div id="login-form-title">
        Connexion
      </div>
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
      <div id="login-form-buttons">
        <Button
          animated
          color="green"
          type="submit"
        >
          <Button.Content visible>Connexion</Button.Content>
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
export default login;
