/**
 * Utils: NewProject
 */

const SuggestDatesErrors = (
  startDate,
  endDate,
) => {
  const dateErrors = [];
  if (startDate === '') {
    const error = 'Vous devez ajouter une date de debut à votre projet';
    dateErrors.push(error);
  }
  if (endDate === '') {
    const error = 'Vous devez ajouter une date de fin à votre projet';
    dateErrors.push(error);
  }
  return dateErrors;
};

/**
 * Export
 */
export default SuggestDatesErrors;
