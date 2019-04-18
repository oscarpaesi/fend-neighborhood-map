import './Header.css';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>
          <span className="title">Auxiliadora <small>&</small> Mont'Serrat</span>
          <hr/>
          <span className="subtitle">Porto Alegre · RS · Brazil</span>
        </h1>
      </header>
    );
  }
}

export default Header;