import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer className="footer">
          <span className="footer--unit footer--unit-unsplash">Images courtest of <a href="http://unsplash.com/">unsplash</a>.</span>
          <span className="footer--unit footer--unit-copyright"><span className="footer--unit-copyright-symbol">&copy;</span> Queers in Tech 2018</span>
          <div className="footer--unit footer--unit-links">
            <ul>
              <li><a href="https://medium.com/queers-in-tech"><i className="fa fa-medium fa-2x"></i></a></li>
              <li><a href="https://www.meetup.com/members/241074599/"><i className="fa fa-meetup fa-2x"></i></a></li>
            </ul>
           </div> 
        </footer>
      </div>
    );
  }
}

export default Footer;
