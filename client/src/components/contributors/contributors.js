import React, { Component } from 'react';
import './contributors.css';

class Contributors extends Component {
  render() {
    return (
      <div>
        <section id="contributors">
          <h3 className="title">Queers in Tech Contributors:</h3>
          <hr />
          <p className="quote">In order for us to start occupying more space in the tech community, we have to start being seen, heard, and felt in the industry. Build more cool shit, jump on worthwhile projects, and start changing the world.</p>
          <p className="author">- Patrick E Porche Jr</p>
          <p className="quote">I want to create an environment where all queers can get together and discuss inclusion in tech.</p>
          <p className="author">- Spencer Dezart-Smith</p>
        </section>
      </div>
    );
  }
}

export default Contributors;
