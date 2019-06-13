/**
 * NPM import
 */
import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Message,
  Icon,
  Loader,
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
   * Lifecycle
   */
  componentWillMount() {
    const { clearPasswordsInputs } = this.props;
    clearPasswordsInputs();
  }

  /**
   * Handlers
   */
  handleChange = (evt) => {
    const { name, value } = evt.target;
    const { changeInput } = this.props;
    changeInput(name, value);
  }

  handleSubmit = (evt) => {
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
    } = this.props;

    if (status === 'loaded') {
      return <Redirect to="/mes-projets" />;
    }

    return (
      <div>
        { (status === 'loading') && (
          <Loader
            active
            size="large"
            inline="centered"
          />
        )}
        { (status !== 'loading') && (
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
              <NavLink to="/inscription">
                <Button
                  animated="vertical"
                  type="button"
                >
                  <Button.Content visible>
                    Je n'ai pas de compte
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="edit" />
                  </Button.Content>
                </Button>
              </NavLink>

              <Button
                animated
                color="green"
                type="submit"
              >
                <Button.Content visible>
                  Connexion
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="angle double right" />
                </Button.Content>
              </Button>
            </div>
            <a id="login-form-forgottenPassword" href="#">Mot de passe oublié</a>
          </Form>
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
  clearPasswordsInputs: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  showErrors: PropTypes.func.isRequired,
  connectUser: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default LoginForm;
