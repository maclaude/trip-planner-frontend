/**
 * Utils: getSuggestionFormErrors
 */
const getSuggestionFormErrors = (type, title) => {
  const errors = [];

  // Error conditions
  if (type === '') {
    const error = 'Vous devez selectionner un type de suggestion';
    errors.push(error);
  }

  if (title === '') {
    const error = 'Vous devez saisir un titre à votre suggestion';
    errors.push(error);
  }

  return errors;
};

/**
 * Export
 */
export default getSuggestionFormErrors;
