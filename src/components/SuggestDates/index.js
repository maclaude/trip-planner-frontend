/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import NavigationSingleProject from 'src/containers/Navigation/NavigationSingleProject';
import SuggestDates from 'src/containers/SuggestDates/SuggestDates';
// Style
import './suggest_dates.scss';

/**
 * Code
 */
const SuggestDatesView = ({ project }) => (
  <div className="user-view">
    <NavigationSingleProject project={project} />
    <SuggestDates project={project} />
  </div>
);

// PropTypes validation
SuggestDatesView.propTypes = {
  project: PropTypes.object.isRequired,
};


/**
 * Export
 */
export default SuggestDatesView;
