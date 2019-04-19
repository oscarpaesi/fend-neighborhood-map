import './Map.css';
import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import CustomMarker from '../CustomMarker/CustomMarker';

const MapWrapper = compose(
  withProps({
    loadingElement: (
      <span>Loading Google Maps...</span>
    ),
    containerElement: (
      <main className="map-container" role="application" tabIndex="0" />
    ),
    mapElement: (
      <div className="map" />
    )
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={ 16 }
    defaultCenter={ {lat: -30.02502, lng: -51.191165} } // Center of the neighborhood
  >
    {props.places.map(place =>
      <CustomMarker
        key={ place.id }
        place={ place }
        highlight={ props.highlighted && (place.id) === props.highlighted.id }
        select={ props.selected && (place.id === props.selected.id) }
      />
    )}
  </GoogleMap>
);

class Map extends Component {
  render = () => {
    const { googleMapURL, places, selected, highlighted } = this.props;
    return (
      <MapWrapper
        googleMapURL={ googleMapURL }
        places={ places }
        selected={ selected }
        highlighted={ highlighted }
      />
    );
  }
}

export default Map;