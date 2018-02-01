import React, { Component } from 'react';
import $ from  'jquery';

class Contact extends Component {
  componentDidMount() {
    const form = document.querySelector('.Contact--form')
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = $(event.target)
        .serializeArray()
        .reduce((acu, input) => {
          acu[input.name] = input.value;
          return acu;
        }, {});
      //Will need to setup email services on backend
        console.log(data);  
      // Logging for the console while developing react edition.  
    })
  }

  render() {
    return (
      <div className="Contact">
        <div className="page">
          <p className="page--title">Get in Touch</p>
          <p className="page--copy">We'd love to hear from you.</p>
          <hr className="page--break"/>
          <div className="Contact--form-holder">
            <div className="Contact--form-holder-shadow Contact--form-holder-shadow-top"/>          
            <div className="Contact--form-holder-shadow Contact--form-holder-shadow-bottom"/>          
            <form className="Contact--form">
              <input name="name" placeholder="Name"/>
              <input name="email" placeholder="Email"/>
              <textarea name="message" placeholder="Your Space" className="Contact--form-message"/>
              <button type="submit" className="Contact--form-submit">Submit</button>
            </form>
          </div>  
        </div>
      </div>
    );
  }
}

export default Contact;
