/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import NewProjectForm from 'src/components/CreateProject/NewProject';

// Action Creators
import {
  changeProjectInputs,
  showNewprojectErrors,
  newProject,
  addDates,
} from 'src/store/reducers/createProject';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  title: state.createProject.title,
  description: state.createProject.description,
  debutDates: state.createProject.debutDates,
  endDates: state.createProject.endDates,
  dateSuggest: state.createProject.dateSuggest,
  destination: state.createProject.destination,
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
  newProject: () => {
    dispatch(newProject());
  },
  addDates: () => {
    dispatch(addDates());
  },
});

/**
 * Connect
 */
const NewProjectFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewProjectForm);

/**
 * Export
 */
export default NewProjectFormContainer;
