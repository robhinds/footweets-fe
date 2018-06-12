import React, { Component } from 'react';
import logo from './logo.svg';
import LatestTweets from './components/LatestTweets';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <aside />
        <main>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <LatestTweets />
        </main>
        <aside />
      </div>
    );
  }
}

export default App;
