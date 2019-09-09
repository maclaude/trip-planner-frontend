/**
 * Utils: getSignupFormErrors
 */
const getSignupFormErrors = (
  firstname,
  lastname,
  email,
  password,
  confirmedPassword,
) => {
  const errors = [];

  // Error conditions
  if (firstname === '') {
    const error = 'Le champ prénom doit être rempli';
    errors.push(error);
  }

  if (lastname === '') {
    const error = 'Le champ nom doit être rempli';
    errors.push(error);
  }

  if (email === '') {
    const error = 'Le champ email doit être rempli';
    errors.push(error);
  }

  if (password.length < 8) {
    const error = 'Le mot de passe doit contenir au moins 8 caractères';
    errors.push(error);
  }

  if (password !== confirmedPassword) {
    const error = 'Les mots de passe ne sont pas identiques';
    errors.push(error);
  }

  return errors;
};

/**
 * Export
 */
export default getSignupFormErrors;
