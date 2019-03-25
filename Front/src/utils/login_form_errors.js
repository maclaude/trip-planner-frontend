/**
 * Utils: getLoginFormErrors
 */
const getLoginFormErrors = (email, password) => {
  // Initialisation du tableau d'erreurs
  const errors = [];

  // Ecriture des différentes erreurs
  if (email === '') {
    const error = 'Le champ email doit être rempli';
    errors.push(error);
  }

  if (password === '') {
    const error = 'Le champ password doit être rempli';
    errors.push(error);
  }

  return errors;
};

/**
 * Export
 */
export default getLoginFormErrors;
