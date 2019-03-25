/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import NewProjectForm from 'src/components/CreateProject/NewProject';

// Action Creators
import { changeProjectInputs, showNewprojectErrors } from 'src/store/reducers/CreateProject';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  title: state.CreateProject.title,
  description: state.CreateProject.description,
  dates: state.CreateProject.dates,
  destination: state.CreateProject.destination,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInput: (name, value) => {
    dispatch(changeProjectInputs(name, value));
  },
  showErrors: (errors) => {
    dispatch(showNewprojectErrors(errors));
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
