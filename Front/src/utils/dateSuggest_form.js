/**
 * Utils: NewProject
 */

const suggestDates = (
  debutDates,
  endDates,
) => {
  const dateSuggest = [];
  if (debutDates && endDates !== '') {
    dateSuggest.push(debutDates, endDates);
  }
  return dateSuggest;
};

/**
 * Export
 */
export default suggestDates;
