import './Search.css';
import React, { Component } from 'react';

class Search extends Component {
  state = {
    query: '',
    places: []
  }
  componentWillReceiveProps = (props) => {
    this.setState({
      places: props.places
    });
  }
  updateQuery = (query) => {
    this.setState({
      query
    });
    this.props.onSearchUpdated(query);
  }
  render() {
    const { query, places } = this.state;
    return (
      <aside className="search">
        <input
          type="text"
          placeholder="Search places by name"
          value={ query }
          onChange={ (event) => this.updateQuery(event.target.value) }
        />
        <ol className="search-results">
        {places.map((place) => (
          <li key={ place.id }>
            <span>{ place.title }</span>
          </li>
        ))}
        </ol>
      </aside>
    );
  }
}

export default Search;