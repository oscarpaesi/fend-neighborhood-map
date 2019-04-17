import './Map.css';
import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { locations } from '../../data/locations';

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
    {
      props.locations.map(location =>
        <Marker key={ location.id } position={ location.position } />
      )
    }
  </GoogleMap>
);

class Map extends Component {

  constructor(props) {
    super(props);

    this.state = { locations };
  }

  render = () => {
    const { googleMapURL } = this.props;
    return (
      <MapWrapper
        googleMapURL={ googleMapURL }
        locations={ this.state.locations }
      />
    );
  }
}

export default Map;