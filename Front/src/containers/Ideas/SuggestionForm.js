/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import suggestionForm from 'src/components/Ideas/suggestionForm';

// Action Creators
import {
  changeSuggestionInputs,
  changeSuggestionType,
  showSuggestionErrors,
  sendSuggestion,
} from 'src/store/reducers/suggestions';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  type: state.suggestions.type,
  name: state.suggestions.name,
  description: state.suggestions.description,
  url: state.suggestions.url,
  price: state.suggestions.price,
  errors: state.suggestions.errors,
});

// === Actions ===
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInput: (name, value) => {
    dispatch(changeSuggestionInputs(name, value));
  },
  changeType: (value) => {
    dispatch(changeSuggestionType(value));
  },
  showErrors: (errors) => {
    dispatch(showSuggestionErrors(errors));
  },
  sendSuggestion: () => {
    dispatch(sendSuggestion(ownProps.project.id));
  },
});

/**
 * Connect
 */
const suggestionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(suggestionForm);

/**
 * Export
 */
export default suggestionFormContainer;
