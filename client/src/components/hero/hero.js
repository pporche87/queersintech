import React, { Component } from 'react';
import './hero.css';

class Hero extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div className="background-image"></div>
          <div className="hero-content-area">
            <h1>Queers in Tech</h1>
            <h3>An inclusive community of queers and allies in technology</h3>
            <a href="#contact" className="btn">Contact Us</a>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
