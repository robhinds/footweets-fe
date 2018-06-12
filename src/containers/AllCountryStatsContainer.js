import React, { Component } from 'react';
import AllCountryStats from '../components/AllCountryStats';


export default class AllCountryStatsContainer extends Component {

  state = { stats: [] }

  componentDidMount() {
    var that = this;
    fetch('/stats').then(function (response) {
      return response.json();
    }).then(function (result) {
      that.setState({
        stats: Object.entries(result.data).map( item => (
          {
            country: item[0],
            score: item[1][that.props.sortBy]
          }
        )).sort(function(a, b){return b.score - a.score})
      })
    });
  }

  render() {
    return <AllCountryStats stats={this.state.stats} />;
  }

}
