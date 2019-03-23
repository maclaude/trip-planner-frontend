/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Form,
  Message,
  Icon,
} from 'semantic-ui-react';

/**
 * Local import
 */
// Utils
import getLoginFormErrors from 'src/utils/login_form_errors';

/**
 * Code
 */
class LoginForm extends React.Component {
  /**
   * Local state
   */
  state = {
    email: '',
    password: '',
    errors: [],
  };

  /**
   * Handlers
   */
  handleChange = (evt) => {
    const { name, value } = evt.target;

    // J'enregistre la valeur de l'input dans le state
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = this.state;

    // Gestion des erreurs
    const errors = getLoginFormErrors(email, password);

    this.setState({
      errors,
      password: '',
    });

    // Création de l'objet user
    const user = {
      email,
      password,
    };

    if (email && password !== '') {
      console.log('Login :: handleSubmit');
      console.log(user);

      // @TODO Action de comparaison de des données de l'utilisateur
      // avec celles en base de donnée.
      // Requête GET via axios à la bdd avec l'email en paramêtre.
      // Si les données matchs -> return true -> connexion

      this.setState({
        email: '',
        password: '',
      });
    }
  }

  /**
   * Render
   */
  render() {
    const {
      email,
      password,
      errors,
    } = this.state;

    return (
      <Form
        id="login-form"
        onSubmit={this.handleSubmit}
      >
        <div id="login-form-title">
          Connexion
        </div>
        <Form.Field>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">
            Mot de passe
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={password}
              onChange={this.handleChange}
            />
          </label>
        </Form.Field>

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

        <div id="login-form-buttons">
          <NavLink
            to="/profil"
            exact
          >
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
          </NavLink>
        </div>
      </Form>
    );
  }
}

/**
 * Export
 */
export default LoginForm;
