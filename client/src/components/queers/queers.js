import React, { Component } from 'react';
import './queers.css';

class Queers extends Component {
  constructor() {
    super()
    this.state = {
      queers: []
    }
  }

  componentDidMount() {
    fetch('/api/queers')
      .then(results => results.json())
      .then(queers => this.setState({queers}, () => console.log('Queer call..', queers)))
  }

  render() {
    return (
      <div>
        <h2>Hello Queers!</h2>
        <ul>
          {this.state.queers.map(queer => 
            <li key={queer.id}>{ queer.firstName } { queer.lastName } </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Queers;
