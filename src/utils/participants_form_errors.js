/**
 * Utils: getParticpantsFormErrors
 */
const getParticipantsFormErrors = (name, email) => {
  const errors = [];

  // Error conditions
  if (name === '') {
    const error = 'Vous devez renseigner un nom';
    errors.push(error);
  }

  if (email === '') {
    const error = 'Vous devez renseigner un email';
    errors.push(error);
  }

  return errors;
};

/**
 * Export
 */
export default getParticipantsFormErrors;
