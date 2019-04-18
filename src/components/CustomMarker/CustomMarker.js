import './CustomMarker.css';
import React, { Component } from 'react';
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
    const { place } = this.props;
    return (
      <Marker position={ place.position } onClick={ this.toggleInfoWindow }>
        {this.state.showInfo && (
          <InfoWindow onCloseClick={ this.onInfoWindowClosed }>
            <div>{ place.title }</div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default CustomMarker;