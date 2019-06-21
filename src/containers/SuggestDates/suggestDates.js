/**
 * NPM Import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import SuggestDates from 'src/components/SuggestDates/SuggestDates';

// Action creators
import {
  changeNewProjectInputs,
  addProjectDates,
  showAddProjectDatesErrors,
} from 'src/store/reducers/project';
// Selector
import { getCurrentProjectDates } from 'src/store/reducers/user';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = (state, ownProps) => ({
  startDate: state.project.startDate,
  endDate: state.project.endDate,
  errors: state.project.errors,
  suggestedDates: getCurrentProjectDates(state.user.projects, ownProps.project._id),
});

// === Actions ===
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInput: (name, value) => {
    dispatch(changeNewProjectInputs(name, value));
  },
  showErrors: (errors) => {
    dispatch(showAddProjectDatesErrors(errors));
  },
  addProjectDates: () => {
    dispatch(addProjectDates(ownProps.project._id));
  },
});

/**
 * Connect
 */
const SuggestDatesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuggestDates);

/**
 * Export
 */
export default SuggestDatesContainer;
