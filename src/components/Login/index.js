/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Header from 'src/components/Header';
import LoginForm from 'src/containers/Login/LoginForm';

// Style
import './login.scss';

/**
 * Code
 */
const LoginView = () => (
  <div id="login-view">
    <Header />
    <LoginForm />
  </div>
);


/**
 * Export
 */
export default LoginView;
