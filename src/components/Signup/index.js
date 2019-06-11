/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Header from 'src/components/Header';
import SignupForm from 'src/containers/Signup/SignupForm';
import Footer from 'src/components/Footer';

// Style
import './signup.scss';

/**
 * Code
 */
const SignupView = () => (
  <div id="signupView">
    <Header />
    <SignupForm />
    <Footer />
  </div>
);

/**
 * Export
 */
export default SignupView;
