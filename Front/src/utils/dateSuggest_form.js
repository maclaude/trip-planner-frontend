/**
 * Utils: NewProject
 */

const SuggestDatesErrors = (
  debutDates,
  endDates,
) => {
  const dateErrors = [];
  if (debutDates === '') {
    const error = 'Vous devez ajouter une date de debut à votre projet';
    dateErrors.push(error);
  }
  if (endDates === '') {
    const error = 'Vous devez ajouter une date de fin à votre projet';
    dateErrors.push(error);
  }
  return dateErrors;
};

/**
 * Export
 */
export default SuggestDatesErrors;
