/**
 * Utils: Suggest dates form errors
 */

/**
 * Local import
 */
import { getDateFormat } from 'src/utils/date_format';

/**
 * Code
 */
const SuggestDatesErrors = (
  startDate,
  endDate,
) => {
  const dateErrors = [];
  const currentDate = new Date();

  if (startDate === '') {
    const error = 'Vous devez ajouter une date de debut à votre projet';
    dateErrors.push(error);
  }
  if (endDate === '') {
    const error = 'Vous devez ajouter une date de fin à votre projet';
    dateErrors.push(error);
  }
  if (endDate < startDate) {
    const error = 'La date de fin doit être ultérieure à la date de début';
    dateErrors.push(error);
  }
  if (getDateFormat(startDate) < getDateFormat(currentDate)) {
    const error = 'La date de début doit être supérieure à la date actuelle';
    dateErrors.push(error);
  }
  return dateErrors;
};

/**
 * Export
 */
export default SuggestDatesErrors;
