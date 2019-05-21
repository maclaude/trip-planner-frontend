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
const Login = () => (
  <>
    <Header />
    <LoginForm />
    <Footer />
  </>
);


/**
 * Export
 */
export default Login;
