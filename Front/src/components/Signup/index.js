/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Form from './form';

// Style
import './signup.scss';

/**
 * Code
 */
const Signup = () => (
  <>
    <Header />
    <Form />
    <Footer />
  </>
);

/**
 * Export
 */
export default Signup;
