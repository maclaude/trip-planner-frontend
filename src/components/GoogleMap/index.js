/**
 * NPM import
 */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Style
import './google_map.scss';
// Component
import Marker from './Marker';

/**
 * Code
 */
const GoogleMap = ({ lat, lng }) => (
  <div id="map">
    <GoogleMapReact
      bootstrapURLKeys={{ key: '/* API key */' }}
      defaultCenter={{ lat, lng }}
      defaultZoom={11}
    >
      <Marker
        lat={lat}
        lng={lat}
      />
    </GoogleMapReact>
  </div>
);

// PropTypes validation
GoogleMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

/**
 * Export
 */
export default GoogleMap;
