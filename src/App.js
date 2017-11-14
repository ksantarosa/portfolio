import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

class App extends Component {
  handleShow = (ref) => {
    this.refs[ref].scrollIntoView({block: 'end', behavior: 'smooth'});
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <About />
        <Experience />
        <Projects />
      </div>
    );
  }
}

export default App;
