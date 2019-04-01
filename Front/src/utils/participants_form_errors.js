/**
 * Utils: getParticpantsFormErrors
 */
const getParticipantsFormErrors = (name, email) => {
  // Initialisation du tableau d'erreurs
  const errors = [];

  // Ecriture des différentes erreurs
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
