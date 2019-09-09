/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';

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
   * Lifecycle
   */
  componentDidMount() {
    const { clearAuthState } = this.props;
    clearAuthState();
  }

  /**
   * Handlers
   */
  handleInputChange = evt => {
    const { name, value } = evt.target;
    const { changeInput } = this.props;

    changeInput(name, value);
  }

  handleSubmit = evt => {
    evt.preventDefault();

    const {
      firstname,
      lastname,
      email,
      password,
      confirmedPassword,
      showErrors,
      addNewUser,
    } = this.props;

    // Error handler
    const errors = getSignupFormErrors(
      firstname,
      lastname,
      email,
      password,
      confirmedPassword,
    );

    if (
      (firstname && lastname && email !== '')
      && password === confirmedPassword
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
      errors,
      status,
      responseError,
    } = this.props;

    if (status === 'created') {
      return <Redirect to="/connexion" />;
    }

    return (
      <div id="signup">
        <form
          className="form__container"
          onSubmit={this.handleSubmit}
        >

          <div className="form__title">Inscription</div>

          <div className="field">
            <label htmlFor="firstname" className="field__label">
              Prénom
            </label>
            <input
              type="text"
              name="firstname"
              className="field__input"
              placeholder="Votre prénom"
              value={firstname}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="lastname" className="field__label">
              Nom
            </label>
            <input
              type="text"
              name="lastname"
              className="field__input"
              placeholder="Votre nom"
              value={lastname}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email" className="field__label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="field__input"
              placeholder="Votre email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="password" className="field__label">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              className="field__input"
              placeholder="Votre mot de passe"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="confirm-password" className="field__label">
              Confirmation du mot de passe
            </label>
            <input
              type="password"
              name="confirmedPassword"
              className="field__input"
              placeholder="Confirmez votre mot de passe"
              value={confirmedPassword}
              onChange={this.handleInputChange}
            />
          </div>

          {(errors.length > 0) && (
            <div>
              {errors.map(error => (
                <div className="form__error" key={error}>
                  <p>
                    {error}
                  </p>
                </div>
              ))}
            </div>
          )}

          {(responseError !== '') && (
            <div>
              <div className="form__error">
                <p>
                  {responseError}
                </p>
              </div>
            </div>
          )}

          <div id="signup-form-buttons">
            <NavLink to="/connexion">
              <button
                type="button"
                className="form__button form__button--blue"
              >
                J'ai déjà un compte
              </button>
            </NavLink>

            <button
              type="submit"
              className="form__button form__button--grey"
              onClick={this.handleSubmit}
            >
              S'inscrire
            </button>
          </div>
        </form>
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
  errors: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  responseError: PropTypes.string.isRequired,
  clearAuthState: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  showErrors: PropTypes.func.isRequired,
  addNewUser: PropTypes.func.isRequired,
};


/**
 * Export
 */
export default SignupForm;
