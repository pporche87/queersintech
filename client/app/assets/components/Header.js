import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Header extends Component {
  componentDidMount() {
    const menuIcon = $('.header--toggle');
    // const menuContent = $('.header--menu-content');
    const siteHeader = $('.header');
  
    const toggleTheMenu = () => {
      // menuContent.toggleClass('header--menu-content--is-visible');
      siteHeader.toggleClass('header--is-expanded');
      menuIcon.toggleClass('header--toggle-close-x');
    };
  
    const events = () => {
      menuIcon.click(toggleTheMenu);
    };
  
    events();
  }
  render() {
    const hash = this.props.location.hash.slice(1)
    return (
      <div className="Header">

        <div className={`header header${hash ? '' : '-home'}`}>
          <h2><Link to="/">Queers in Tech</Link></h2>
          <nav>
            <div className="header--nav">
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/#events">Events</Link></li>
            {/* </div>
            <div className="header--nav"> */}
              <li><Link to="/#contributors">Contributors</Link></li>
              <li><Link to="/#blog">Blog</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
              {/* <li><a href="https://medium.com/queers-in-tech" rel="noopener noreferrer" target="_blank">Blog</a></li> */}
            </div>
          </nav>
        </div>
        <div className={`header--toggle header--toggle${hash ? '' : '-home'}`}>
          <div className={`header--toggle-middle header--toggle-middle${hash ? '' : '-home'}`}></div>
        </div> 
      </div>
    );
  }
}

export default Header;
