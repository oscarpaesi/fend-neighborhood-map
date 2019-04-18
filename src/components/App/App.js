import './App.css';
import React, { Component } from 'react';
import * as Keys from '../../utils/apiKeys'
import Header from '../Header/Header'
import Search from '../Search/Search'
import Map from '../Map/Map'
import { locations } from '../../data/locations';

const byTitle = (a, b) => {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
}

class App extends Component {

  state = {
    places: []
  }

  componentDidMount = () => {
    this.setState({
      places: locations.sort(byTitle)
    });
  }

  getSearchResults = () => {
    return this.state.places;
  }

  render() {
    const results = this.getSearchResults();
    return (
      <div className="App">
        <Header/>
        <div id="content">
          <Search
            places={ results }
          />
          <Map
            googleMapURL={ `https://maps.googleapis.com/maps/api/js?key=${ Keys.GOOGLE_MAPS_KEY }&v=3` }
            places={ results }
          />
        </div>
      </div>
    );
  }
}

export default App;
