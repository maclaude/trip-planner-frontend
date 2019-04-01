/**
 * NPM Import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import SuggestDates from 'src/components/CreateProject/SuggestDates/SuggestDates';

// Action creators
import {
  changeProjectInputs,
  addDates,
  showNewprojectErrors,
} from 'src/store/reducers/createProject';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  debutDates: state.createProject.debutDates,
  endDates: state.createProject.endDates,
  dateSuggest: state.createProject.dateSuggest,
  errors: state.createProject.errors,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInput: (name, value) => {
    dispatch(changeProjectInputs(name, value));
  },
  showErrors: (errors) => {
    dispatch(showNewprojectErrors(errors));
  },
  addDates: () => {
    dispatch(addDates());
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
