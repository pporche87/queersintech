import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <div className="page">
          <div className="Hero--backgroundImage"></div>
          <div className="Hero--contentArea">
            <h1>Queers in Tech</h1>
            <h3>An inclusive community of queers and allies in technology</h3>
            <Link to="#contact" className="btn">Contact Us</Link>
          </div>
        </div>  
      </div>
    );
  }
}

export default Hero;
