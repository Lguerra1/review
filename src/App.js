import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Nav from "./components/Nav"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
