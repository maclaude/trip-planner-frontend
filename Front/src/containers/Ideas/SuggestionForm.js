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
} from 'src/store/reducers/ideas';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  type: state.ideas.type,
  name: state.ideas.name,
  description: state.ideas.description,
  url: state.ideas.url,
  price: state.ideas.price,
  errors: state.ideas.errors,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
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
    dispatch(sendSuggestion());
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
