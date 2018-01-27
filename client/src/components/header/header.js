import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h2><a href="/">Queers in Tech</a></h2>
          <nav>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="https://medium.com/queers-in-tech" rel="noopener noreferrer" target="_blank">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
