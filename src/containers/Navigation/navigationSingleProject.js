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
  username: state.user.firstname,
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
