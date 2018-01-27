import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Events from './components/events/events'
import Contributors from './components/contributors/contributors'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Events />
        <Contributors />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
