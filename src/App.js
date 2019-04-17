import React, { Component } from 'react';
import './App.css';
import { Header, Segments } from './components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header heading="Overview" />
        <Segments />
      </div>
    );
  }
}

export default App;
