/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
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
class SignupForm extends React.Component {
  /**
   * Handlers
   */
  handleChange = (evt) => {
    const { name, value } = evt.target;

    const { changeInput } = this.props;

    changeInput(name, value);
  }

  handleClick = () => {
    const { toogleTermsCheckbox } = this.props;

    // Gestion de termsCheked
    toogleTermsCheckbox();
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
      showErrors,
      addNewUser,
    } = this.props;

    // Gestion des erreurs
    const errors = getSignupFormErrors(
      firstname,
      lastname,
      email,
      password,
      confirmedPassword,
      termsChecked,
    );

    if (
      (firstname && lastname && email !== '')
      && password === confirmedPassword
      && termsChecked
    ) {
      addNewUser();
    }
    else {
      showErrors(errors);
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
      loggedIn,
    } = this.props;

    if (loggedIn) {
      return <Redirect to="/profil" />;
    }

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
              onClick={this.handleClick}
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
            <NavLink to="/connexion">
              <Button
                animated="vertical"
                type="button"
              >
                <Button.Content visible>J'ai déjà un compte</Button.Content>
                <Button.Content hidden>
                  <Icon name="user" />
                </Button.Content>
              </Button>
            </NavLink>

            <Button
              animated
              color="green"
              type="submit"
              onClick={this.handleSubmit}
            >
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

// PropTypes validation
SignupForm.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmedPassword: PropTypes.string.isRequired,
  termsChecked: PropTypes.bool.isRequired,
  errors: PropTypes.array.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  changeInput: PropTypes.func.isRequired,
  toogleTermsCheckbox: PropTypes.func.isRequired,
  showErrors: PropTypes.func.isRequired,
  addNewUser: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default SignupForm;
