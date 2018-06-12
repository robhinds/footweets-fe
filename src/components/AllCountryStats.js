import React, { Component } from 'react';
import CountryDisplay from './CountryDisplay';

export default class AllCountryStats extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="allCountryStats">
        { this.props.stats.map(t => (
          <CountryDisplay country={t.country} score={t.score} />
        )) }
      </div>
    );
  }
}
