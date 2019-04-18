import './App.css';
import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import by from 'sort-by';
import * as Keys from '../../utils/apiKeys';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Map from '../Map/Map';
import { locations } from '../../data/locations';

class App extends Component {
  state = {
    places: [],
    visiblePlaces: null,
    selectedPlace: null,
    highlightedPlace: null
  }
  componentDidMount = () => {
    const places = locations.sort(by('title'));
    this.setState({
      places,
      visiblePlaces: places
    });
  }
  onSearchUpdated = (query) => {
    this.setState({
      visiblePlaces: this.getFilteredPlaces(query, this.state.places)
    });
  }
  onItemSelected = (place) => {
    const { selectedPlace } = this.state;
    this.setState({
      selectedPlace: (selectedPlace && (selectedPlace.id === place.id)) ? null : place
    });
  }
  onItemHighlighted = (place) => {
    const { highlightedPlace } = this.state;
    this.setState({
      highlightedPlace: (highlightedPlace && (highlightedPlace.id === place.id)) ? null : place
    });
  }
  getFilteredPlaces = (query, places) => {
    let filteredPlaces;
    if (query) {
      const match = new RegExp(escapeRegExp(query.trim()), 'i');
      filteredPlaces = places.filter((p) => match.test(p.title));
    } else {
      filteredPlaces = places;
    }
    return filteredPlaces;
  }
  render() {
    const { visiblePlaces, selectedPlace, highlightedPlace } = this.state;
    return (
      <div className="App">
        <Header/>
        <div id="content">
          <Search
            places={ visiblePlaces }
            selected={ selectedPlace }
            onSearchUpdated={ this.onSearchUpdated }
            onItemSelected={ this.onItemSelected }
            onItemHighlighted={ this.onItemHighlighted }
          />
          <Map
            googleMapURL={ `https://maps.googleapis.com/maps/api/js?key=${ Keys.GOOGLE_MAPS_KEY }&v=3` }
            places={ visiblePlaces }
            selected={ selectedPlace }
            highlighted={ highlightedPlace }
          />
        </div>
      </div>
    );
  }
}

export default App;
