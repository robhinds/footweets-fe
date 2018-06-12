import React, { Component } from 'react';
import logo from './logo.svg';
import LatestTweetsContainer from './containers/LatestTweetsContainer';
import AllCountryStatsContainer from './containers/AllCountryStatsContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">Header</div>
        <div className="latestTweets">
          <h3 style={{marginLeft: '50px'}}>Latest tweets</h3>
          <LatestTweetsContainer />
        </div>
        <div className="stats">
          <h3>Ranking by sentiment</h3>
          <AllCountryStatsContainer sortBy="averageSentiment" />
        </div>
        <div className="conversations" >
          <h3>Ranking by activity</h3>
          <AllCountryStatsContainer sortBy="count" />
        </div>
      </div>
    );
  }
}

export default App;
