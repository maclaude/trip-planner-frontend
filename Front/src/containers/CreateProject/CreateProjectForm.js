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
} from 'src/store/reducers/CreateProject';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  title: state.CreateProject.title,
  description: state.CreateProject.description,
  debutDates: state.CreateProject.debutDates,
  endDates: state.CreateProject.endDates,
  dateSuggest: state.CreateProject.dateSuggest,
  destination: state.CreateProject.destination,
  errors: state.CreateProject.errors,
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
  addDates: (dateSuggest) => {
    dispatch(addDates(dateSuggest));
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
