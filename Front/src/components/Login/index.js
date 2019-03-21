/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import LoginForm from './form';

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
