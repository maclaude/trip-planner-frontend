/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Header from 'src/components/Header';
import LoginForm from 'src/containers/Login/LoginForm';
import Footer from 'src/components/Footer';

// Style
import './login.scss';

/**
 * Code
 */
const LoginView = () => (
  <div id="loginView">
    <Header />
    <LoginForm />
    <Footer />
  </div>
);


/**
 * Export
 */
export default LoginView;
