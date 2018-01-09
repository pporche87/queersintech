import React, { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    return (
      <div>
        <section id="about">
          <h3 className="title">About</h3>
          <p>Diversity and inclusion in tech is a topic we hear often. But how do we increase visibility and actually start to show up more as marginalized groups? This organization seeks to answer that question.</p>
          <hr />
          <ul className="grid">
            <li className="small_1"></li>
            <li className="large_1"></li>
            <li className="large_2"></li>
            <li className="small_2"></li>
          </ul>
        </section>
      </div>
    );
  }
}

export default About;
