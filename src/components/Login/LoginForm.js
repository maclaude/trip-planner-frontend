/**
 * NPM import
 */
import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BarLoader } from 'react-css-loaders';

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
   * Lifecycle
   */
  componentDidMount() {
    const { clearAuthState, clearStatus } = this.props;
    clearAuthState();
    clearStatus();
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
      email,
      password,
      showErrors,
      connectUser,
    } = this.props;

    // Handling errors
    const errors = getLoginFormErrors(email, password);

    if (email && password !== '') {
      connectUser();
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
      email,
      password,
      errors,
      status,
      responseError,
    } = this.props;

    if (status === 'loaded') {
      return <Redirect to="/mes-projets" />;
    }

    return (
      <div id="login">

        { (status === 'loading') && (
          <BarLoader className="loader-icon" />
        )}

        { (status !== 'loading') && (

          <div id="login-form">
            <form
              className="form__container"
              onSubmit={this.handleSubmit}
            >

              <div className="form__title">Connexion</div>

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

              <div id="login-form-buttons">
                <NavLink to="/inscription">
                  <button
                    type="button"
                    className="form__button form__button--blue"
                  >
                    Je n'ai pas de compte
                  </button>
                </NavLink>

                <button
                  type="submit"
                  className="form__button form__button--grey"
                  onClick={this.handleSubmit}
                >
                  Connexion
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

// PropTypes validation
LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  responseError: PropTypes.string.isRequired,
  clearAuthState: PropTypes.func.isRequired,
  clearStatus: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  showErrors: PropTypes.func.isRequired,
  connectUser: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default LoginForm;
