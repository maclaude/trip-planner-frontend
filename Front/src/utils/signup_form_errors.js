/**
 * Utils: getSignupFormErrors
 */
const getSignupFormErrors = (
  firstname,
  lastname,
  email,
  password,
  confirmedPassword,
  termsChecked,
) => {
  // Initialisation du tableau d'erreurs
  const errors = [];

  // Ecriture des différentes erreurs
  if (firstname === '') {
    const error = 'Le champ Prénom doit être rempli';
    errors.push(error);
  }

  if (lastname === '') {
    const error = 'Le champ Nom doit être rempli';
    errors.push(error);
  }

  if (email === '') {
    const error = 'Le champ Email doit être rempli';
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

  if (!termsChecked) {
    const error = 'Vous devez accepter les termes et conditions du site';
    errors.push(error);
  }

  return errors;
};

/**
 * Export
 */
export default getSignupFormErrors;
