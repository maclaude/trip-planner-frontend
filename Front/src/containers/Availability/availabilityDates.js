/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import AvailabilityDates from 'src/components/Availability/AvailabilityDates';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = null;

// === Actions ===
const mapDispatchToProps = {};

/**
 * Connect
 */
const AvailabilityDatesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AvailabilityDates);

/**
 * Export
 */
export default AvailabilityDatesContainer;
