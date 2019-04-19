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
  onItemClicked = (place) => {
    this.props.onItemSelected(place);
  }
  onItemHighlighted = (place) => {
    this.props.onItemHighlighted(place);
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
          <li
            key={ place.id }
            onClick={ () => this.onItemClicked(place) }
            onMouseEnter={ () => this.onItemHighlighted(place) }
            onMouseLeave={ () => this.onItemHighlighted(place) }
          >
            <span>{ place.name }</span>
          </li>
        ))}
        </ol>
      </aside>
    );
  }
}

export default Search;