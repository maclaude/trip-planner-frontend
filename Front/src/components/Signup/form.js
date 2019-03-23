/**
 * NPM import
 */
import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Form,
  Message,
  Icon,
} from 'semantic-ui-react';

/**
 * Local import
 */
// Utils
import getSignupFormErrors from 'src/utils/signup_form_errors';

/**
 * Code
 */
class Signup extends React.Component {
  /**
   * Local state
   */
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmedPassword: '',
    termsChecked: false,
    errors: [],
  };

  /**
   * Handlers
   */
  handleChange = (evt, data) => {
    const { name, value } = evt.target;

    // J'enregistre la valeur de l'input dans le state
    this.setState({
      [name]: value,
    });

    // Gestion de termsCheked
    if (data !== undefined) {
      this.setState({
        termsChecked: data.checked,
      });
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const {
      firstname,
      lastname,
      email,
      password,
      confirmedPassword,
      termsChecked,
    } = this.state;

    // Gestion des erreurs
    const errors = getSignupFormErrors(
      firstname,
      lastname,
      email,
      password,
      confirmedPassword,
      termsChecked,
    );

    this.setState({
      errors,
      password: '',
      confirmedPassword: '',
      termsChecked: false,
    });

    // Création du nouvel utilisateur
    const newUser = {
      firstname,
      lastname,
      email,
      password,
    };

    if (
      (firstname && lastname && email !== '')
      && password === confirmedPassword
      && termsChecked
    ) {
      console.log('Signup :: handleSubmit');
      console.log(newUser);

      // @TODO Action de création d'un nouvel utilisateur
      // Object newUser à envoyer en POST via axios à la bdd

      // Requête axios
      axios.post('url', newUser)
        // Succès
        .then(() => console.log('Requête effectuée avec succès'))
        // Échec
        .catch(() => console.error('Echec de la requête'));

      this.setState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmedPassword: '',
        errors: [],
      });
    }
  }

  /**
   * Render
   */
  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmedPassword,
      termsChecked,
      errors,
    } = this.state;

    return (
      <div id="signup">
        <Form
          id="signup-form"
          onSubmit={this.handleSubmit}
        >
          <div id="signup-form-title">
            Inscription
          </div>
          <Form.Field>
            <label htmlFor="firstname">
              Prénom
              <input
                type="text"
                name="firstname"
                placeholder="Prénom"
                value={firstname}
                onChange={this.handleChange}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="lastname">
              Nom
              <input
                type="text"
                name="lastname"
                placeholder="Nom"
                value={lastname}
                onChange={this.handleChange}
              />
            </label>
          </Form.Field>
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
          <Form.Field>
            <label htmlFor="confirm-password">
              Confirmez votre mot de passe
              <input
                type="password"
                name="confirmedPassword"
                placeholder="Confirmez votre mot de passe"
                value={confirmedPassword}
                onChange={this.handleChange}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <Checkbox
              label="J'accepte les termes et conditions"
              checked={termsChecked}
              onClick={this.handleChange}
            />
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

          <div id="signup-form-buttons">
            <NavLink
              to="/connexion"
              exact
            >
              <Button animated="vertical">
                <Button.Content visible>J'ai déjà un compte</Button.Content>
                <Button.Content hidden>
                  <Icon name="user" />
                </Button.Content>
              </Button>
            </NavLink>
            <Button type="submit" animated color="green">
              <Button.Content visible>S'inscrire</Button.Content>
              <Button.Content hidden>
                <Icon name="angle double right" />
              </Button.Content>
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}


/**
 * Export
 */
export default Signup;
