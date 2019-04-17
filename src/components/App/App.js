import './App.css';
import React, { Component } from 'react';
import * as Facebook from '../../utils/facebookApi'
import * as Keys from '../../utils/apiKeys'
import Map from '../Map/Map'

class App extends Component {

  componentDidMount = () => {
    Facebook.getPlaceInformation("700896006619622")
      .then(response => console.log("Facebook Query Response", response))
      .catch(error => console.log('Facebook Query Error', error));
  }

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
