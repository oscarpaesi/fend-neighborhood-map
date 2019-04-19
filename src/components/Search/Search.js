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
  onKeyDown = (e, place) => {
    if (e.keyCode === 13) {
      this.props.onItemSelected(place);
    }
  }
  render() {
    const { query, places } = this.state;
    return (
      <aside className="search">
        <input
          autofocus
          type="text"
          placeholder="Search places by name"
          aria-label="Search places by name"
          value={ query }
          onChange={ (event) => this.updateQuery(event.target.value) }
          disabled={ this.props.disabled }
        />
        <ol className="search-results">
        {places.map((place) => (
          <li
            key={ place.id }
            onClick={ () => this.onItemClicked(place) }
            onMouseEnter={ () => this.onItemHighlighted(place) }
            onMouseLeave={ () => this.onItemHighlighted(place) }
            onFocus={ () => this.onItemHighlighted(place) }
            onBlur={ () => this.onItemHighlighted(place) }
            onKeyDown={ (e) => this.onKeyDown(e, place) }
            tabIndex={ 0 }
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