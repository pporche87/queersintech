import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'
import Events from './components/Events'
import Contributors from './components/Contributors';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer'
import { log } from 'util';

const pages = {
  '#about' : <About />,
  '#events' : <Events />,
  '#contributors': <Contributors />,
  '#blog': <Blog />,
  '#contact': <Contact />,
}

const getPage = (hash) => {
  const page = pages[hash]
  return page || <Hero />
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Header} />
        <Route exact path='/' render={props => 
          getPage(props.location.hash)
        } />
        <Footer />
      </div>
    );
  }
}

export default App;
