/**
 * Utils: NewProject
 */

const NewProjectErrors = (
  title,
  description,
  debutDates,
  endDates,
  destination,
) => {
  // Initialisation du tableau d'erreurs
  const errors = [];

  if (title === '') {
    const error = 'Vous devez ajouter un titre à votre projet';
    errors.push(error);
  }
  if (description === '') {
    const error = 'Vous devez ajouter une description à votre projet';
    errors.push(error);
  }
  if (destination === '') {
    const error = 'Vous devez ajouter une destination à votre projet';
    errors.push(error);
  }

  return errors;
};

/**
 * Export
 */
export default NewProjectErrors;
