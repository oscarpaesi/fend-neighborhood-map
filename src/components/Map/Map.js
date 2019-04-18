import './Map.css';
import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

const MapWrapper = compose(
  withProps({
    loadingElement: (
      <span>It was not possible to load Google Maps.</span>
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
      <Marker key={ place.id } position={ place.position } />
    )}
  </GoogleMap>
);

class Map extends Component {
  render = () => {
    const { googleMapURL, places } = this.props;
    return (
      <MapWrapper
        googleMapURL={ googleMapURL }
        places={ places }
      />
    );
  }
}

export default Map;