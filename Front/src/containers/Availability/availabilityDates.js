/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import AvailabilityDates from 'src/components/Availability/AvailabilityDates';
import { getFilteredDates } from 'src/store/reducers/createProject';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = (state, ownProps) => ({
  filteredDates: getFilteredDates(ownProps.project.id, state.createProject.availability),
});

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
