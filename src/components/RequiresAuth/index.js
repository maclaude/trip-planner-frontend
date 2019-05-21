/**
 * NPM import
 */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Code
 */
export default function (ComposedComponent) {
  class Authenticate extends React.Component {
    componentDidMount() {
      // eslint-disable-next-line no-console
      console.log('Check-Authentification');
    }

    render() {
      const { isAuthenticated } = this.props;

      return (
        <div>
          {
          isAuthenticated
            ? <ComposedComponent {...this.props} />
            : <Redirect to="/connexion" />
          }
        </div>
      );
    }
  }

  // PropTypes validation
  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.login.loggedIn,
  });

  const mapDispatchToProps = {};

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Authenticate);
}
