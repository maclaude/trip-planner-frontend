/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Navbar from 'src/components/Navbar';

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
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

/**
 * Export
 */
export default NavbarContainer;
