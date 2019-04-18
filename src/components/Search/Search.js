import './Search.css';
import React, { Component } from 'react';

class Search extends Component {
  render() {
    const { places } = this.props;
    return (
      <aside className="search">
        <h2>Search</h2>
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