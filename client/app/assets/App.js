import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Occasion from './components/Occasion';
import Contributors from './components/Contributors';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer'
// import Lyft from './components/Lyft';
import { log } from 'util';

const occasions = [
  {
    title: "Disruptive Technology Hackathon",
    info: "Let's tackly queer community housing",
    date: "February 15, 2018",
    address: "Oakland Marriott City Center"
  },
  {
    title: "Crazy Time Fun",
    info: "Let's tackly queer community housing",
    date: "February 15, 2018",
    address: "Oakland Marriott City Center"
  },
  {
    title: "Not So Crazy Time Not Fun",
    info: "Let's tackly queer community housing",
    date: "February 15, 2018",
    address: "Oakland Marriott City Center"
  }
];

const pages = {
  '#about' : <About />,
  '#events' : <Events events={occasions} />,
  '#occasion/:occasionTitle': <Occasion events={occasions} />,
  '#contributors': <Contributors />,
  '#blog': <Blog />,
  '#contact': <Contact />,
  // '#lyft': <Lyft events={occasions} />
}

const getPage = (hash) => {
  let page;
  if (hash.includes('#occasion')) {
    page = pages['#occasion/:occasionTitle']
  // } else if (hash.includes('?code=')) {
  //   page = pages['#lyft']
  } else {
    page = pages[hash]
  }
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
