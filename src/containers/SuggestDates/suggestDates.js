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
  addDates,
  showNewProjectErrors,
} from 'src/store/reducers/project';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  startDate: state.project.startDate,
  endDate: state.project.endDate,
  suggestedDates: state.project.suggestedDates,
  errors: state.project.errors,
});

// === Actions ===
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInput: (name, value) => {
    dispatch(changeNewProjectInputs(name, value));
  },
  showErrors: (errors) => {
    dispatch(showNewProjectErrors(errors));
  },
  addDates: () => {
    dispatch(addDates(ownProps.project.id));
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
