import './App.css';
import React, { Component } from 'react';
import * as Keys from '../../utils/apiKeys'
import Map from '../Map/Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map
          googleMapURL={ `https://maps.googleapis.com/maps/api/js?key=${ Keys.GOOGLE_MAPS_KEY }&v=3` }
        />
      </div>
    );
  }
}

export default App;
