import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Events extends Component {
  renderEvents(events) {
   return events.map((event, index) => {
      return (
        <div className="event" key={index} >
          <h1>{event.title}</h1>
          <Link to={`/#occasion/${event.title.split(' ').join('')}`} className="btn">
            Learn More
          </Link>
        </div>
      );
    })  
  }

  render() {
    return (
      <div className="Events">
        <div className="page">
          <h3 className="page--title">Events</h3>
          {this.renderEvents(this.props.events)}
        </div>
      </div>
    );
  }
}

export default Events;