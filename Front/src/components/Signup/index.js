/**
 * NPM import
 */
import React from 'react';
import {
  Button,
  Checkbox,
  Form,
  Message,
  Icon,
} from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';

/**
 * Local import
 */
// Style
import './signup.scss';

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

    const { manageErrors } = this;
    // Gestion des erreurs
    manageErrors();

    // Création du nouvel utilisateur
    const newUser = {
      id: uuidv4(),
      firstname,
      lastname,
      email,
      password,
    };

    if (
      email.length > 0
      && password === confirmedPassword
      && termsChecked
    ) {
      console.log('Signup :: handleSubmit');
      console.log(newUser);

      // @TODO Action de création d'un nouvel utilisateur
      // Object newUser à envoyer en POST via axios à la bdd

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
   * Actions
   */
  manageErrors = () => {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmedPassword,
      termsChecked,
    } = this.state;

    const errors = [];

    // Ecriture des différentes erreurs
    if (firstname === '') {
      const error = 'Le champ Prénom doit être rempli';
      errors.push(error);
    }

    if (lastname === '') {
      const error = 'Le champ Nom doit être rempli';
      errors.push(error);
    }

    if (email === '') {
      const error = 'Le champ Email doit être rempli';
      errors.push(error);
    }

    if (password.length < 8) {
      const error = 'Le mot de passe doit contenir au moins 8 caractères';
      errors.push(error);

      this.setState({
        password: '',
        confirmedPassword: '',
      });
    }

    if (password !== confirmedPassword) {
      const error = 'Les mots de passe ne sont pas identiques';
      errors.push(error);

      this.setState({
        password: '',
        confirmedPassword: '',
      });
    }
    if (!termsChecked) {
      const error = 'Vous devez accepter les termes et conditions du site';
      errors.push(error);
    }

    this.setState({
      errors,
    });
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
  }
}


/**
 * Export
 */
export default Signup;
