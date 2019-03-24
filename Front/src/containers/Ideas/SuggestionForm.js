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
  sendSuggestion,
} from 'src/store/reducers/ideas';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  type: state.ideas.type,
  title: state.ideas.title,
  description: state.ideas.description,
  link: state.ideas.link,
  price: state.ideas.price,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInput: (name, value) => {
    dispatch(changeSuggestionInputs(name, value));
  },
  changeType: (value) => {
    dispatch(changeSuggestionType(value));
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
