/**
 * Utils: Suggest dates form errors
 */

/**
 * Local import
 */
import { getISODateFormat } from 'src/utils/date_format';

/**
 * Code
 */
const SuggestDatesErrors = (startDate, endDate) => {
  const errors = [];
  const currentDate = new Date();
  const ISOstartDate = getISODateFormat(startDate);
  const ISOendDate = getISODateFormat(endDate);
  const ISOcurrentDate = getISODateFormat(currentDate);

  // Error conditions
  if (startDate === '') {
    const error = 'Vous devez ajouter une date de debut à votre projet';
    errors.push(error);
  }

  if (endDate === '') {
    const error = 'Vous devez ajouter une date de fin à votre projet';
    errors.push(error);
  }

  if (ISOendDate < ISOstartDate) {
    const error = 'La date de fin doit être ultérieure à la date de début';
    errors.push(error);
  }

  if (ISOstartDate < ISOcurrentDate) {
    const error = 'La date de début doit être supérieure à la date actuelle';
    errors.push(error);
  }

  return errors;
};

/**
 * Export
 */
export default SuggestDatesErrors;
