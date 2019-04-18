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
    return (
      <Marker
        position={ place.position }
        onClick={ this.toggleInfoWindow }
        animation={ highlight
          ? google.maps.Animation.BOUNCE
          : null }
      >
        {(showInfo || select) && (
          <InfoWindow onCloseClick={ this.onInfoWindowClosed }>
            <div className="info-window">
              <h2>{ place.title }</h2>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default CustomMarker;