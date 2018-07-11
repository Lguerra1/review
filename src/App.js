import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Nav from "./components/Nav"

class App extends Component {
  constructor(){
    super();
    this.state={
      zombies: ""
    }
  }

  componentDidMount(){
    axios.get("/api/zombies").then(response => {
      console.log(response.data)
    })
  }

  handleChange(input) {
    this.setState({zombies: input})
  }

  list(){
    axios.post("/api/zombies", {zombie: this.state.zombies}).then(newZombie => {
      console.log(newZombie.data)
    })
  }

  render() {
    return (
      <div className="App">
        <input className="input" onChange={(e) => this.handleChange(e.target.value)}/>
        <button onClick={() => this.list()}>Go!</button>
      </div>
    );
  }
}

export default App;
