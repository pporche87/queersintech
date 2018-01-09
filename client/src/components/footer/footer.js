import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <p>Images courtest of <a href="http://unsplash.com/">unsplash</a>.</p>
          <p>&copy; Queers in Tech 2017</p>
          <ul>
            <li><a href="https://medium.com/queers-in-tech"><i className="fa fa-medium fa-2x"></i></a></li>
            <li><a href="https://www.meetup.com/members/241074599/"><i className="fa fa-meetup fa-2x"></i></a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Footer;
