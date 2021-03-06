import React, { Component } from 'react';

class Events extends Component {
  render() {
    return (
      <div className="Events">
        <div className="page">
          <h3 className="page--title">Workshops and Meetups</h3>
          <p className="page--copy">We get together twice a month to learn new technologies, grow our community, and enjoy talks from industry leaders (that are also queers) in tech.</p>
          <hr className="page--break" />
          <ul className="page--grid">
            <li>
              <i className="fa fa-handshake-o fa-4x"></i>
              <h4>Network</h4>
              <p>Grow your network. Discuss with other queers in the tech space.</p>
            </li>
            <li>
              <i className="fa fa-glass fa-4x"></i>
              <h4>Drink</h4>
              <p>Join us out for a cocktail after your busy day. We're a safe-space to vent!</p>
            </li>
            <li>
              <i className="fa fa-medium fa-4x"></i>
              <h4>Contribute</h4>
              <p>Have something to contribute to the discussion? Become one of our technical writers on Medium.</p>
            </li>
            <li>
              <i className="fa fa-file-code-o fa-4x"></i>
              <h4>Code</h4>
              <p>Share your work and or special projects! Get advice on your code or recruite contributors to your project.</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Events;
