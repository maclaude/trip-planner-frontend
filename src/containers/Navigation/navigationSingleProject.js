/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import NavigationSingleProject from 'src/components/Navigation/NavigationSingleProject';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  user: state.authentication.user,
});

// === Actions ===
const mapDispatchToProps = {};

/**
 * Connect
 */
const NavigationSingleProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationSingleProject);

/**
 * Export
 */
export default NavigationSingleProjectContainer;
