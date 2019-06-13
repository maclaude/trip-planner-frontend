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
  username: state.user.firstname,
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
