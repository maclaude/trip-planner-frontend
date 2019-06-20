/**
 * NPM import
 */
import dateFormat from 'dateformat';

/**
 * Utils: GetDateFormat
 */
export const getDateFormat = date => dateFormat(date, 'dd/mm/yyyy');

export const getISODateFormat = date => dateFormat(date, 'isoDateTime');
