/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import AuthHeader from 'src/components/AuthHeader';
import LoginForm from 'src/containers/Login/LoginForm';

// Style
import './login.scss';

/**
 * Code
 */
const LoginView = () => (
  <div id="login-view">
    <AuthHeader />
    <LoginForm />
  </div>
);


/**
 * Export
 */
export default LoginView;
