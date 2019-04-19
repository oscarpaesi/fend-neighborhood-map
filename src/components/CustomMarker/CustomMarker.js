import './CustomMarker.css';
import React, { Component } from 'react';
/* global google */
import { Marker, InfoWindow } from 'react-google-maps';

class CustomMarker extends Component {
  state = {
    showInfo: false
  }
  onInfoWindowClosed = () => {
    this.setState({
      showInfo: false
    });
  }
  toggleInfoWindow = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }
  render() {
    const { showInfo } = this.state;
    const { place, select, highlight } = this.props;
    const position = new google.maps.LatLng(place.location.latitude, place.location.longitude);
    return (
      <Marker
        position={ position }
        onClick={ this.toggleInfoWindow }
        animation={ highlight
          ? google.maps.Animation.BOUNCE
          : null }
      >
        {(showInfo || select) && (
          <InfoWindow onCloseClick={ this.onInfoWindowClosed }>
            <div className="info-window">
              <div className="info-header">
                <img src={ place.picture.data.url } alt={ place.name } />
                <h2>
                  <a href={ place.link } target="_blank" rel="noopener noreferrer">
                    { place.name }
                  </a>
                </h2>
              </div>
              <hr/>
              <p><strong>Address:</strong> { place.location.street }</p>
              <p><strong>Rating:</strong> { place.overall_star_rating } of 5</p>
              {place.price_range && (
                <p><strong>Price:</strong> { place.price_range }</p>
              )}
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default CustomMarker;