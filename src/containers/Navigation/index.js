/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Navigation from 'src/components/Navigation';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  user: state.login.user,
});

// === Actions ===
const mapDispatchToProps = {};

/**
 * Connect
 */
const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);

/**
 * Export
 */
export default NavigationContainer;
