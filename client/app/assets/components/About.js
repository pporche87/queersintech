import React, { Component } from 'react';
import $ from 'jquery';

class About extends Component {
  componentDidMount() {
    $('.page--grid-item').each(function(){$(this).addClass('page--grid-item-visible')})
  }

  render() {
    return (
      <div className="About">
        <div className="page">
          <h3 className="page--title">About</h3>
          <p className="page--copy">Diversity and inclusion in tech is a topic we hear often. But how do we increase visibility and actually start to show up more as marginalized groups? This organization seeks to answer that question.</p>
          <hr className="page--break"/>
          <ul className="page--grid">
            <li className="page--grid-item page--grid-item-small"></li>
            <li className="page--grid-item page--grid-item-large"></li>
            <li className="page--grid-item page--grid-item-large"></li>
            <li className="page--grid-item page--grid-item-small"></li>
          </ul>
        </div>  
      </div>
    );
  }
}

export default About;
