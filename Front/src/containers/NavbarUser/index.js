/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import NavbarUser from 'src/components/NavbarUser';

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
const NavbarUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavbarUser);

/**
 * Export
 */
export default NavbarUserContainer;
