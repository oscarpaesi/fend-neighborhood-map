import './Map.css';
import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

const MapWrapper = compose(
  withProps({
    loadingElement: (
      <span>There was an error while loading the Google Maps scripts. Please try again later.</span>
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
    defaultZoom={ 13 }
    defaultCenter={ {lat: -30.034647, lng: -51.217658} } // Center of Porto Alegre
  />
);

class Map extends Component {

  render() {
    const { googleMapURL } = this.props;
    return (
      <MapWrapper googleMapURL= { googleMapURL } />
    );
  }
}

export default Map;