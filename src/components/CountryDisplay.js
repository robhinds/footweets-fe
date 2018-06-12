import React, { Component } from 'react';

export default class CountryDisplay extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="countryStats">
        {this.flag(this.props.country)} <strong>{ this.props.country }</strong> <em>({ this.props.score })</em>
      </div>
    );
  }

  flag(c) {
    switch(c) {
      case "Brazil": return "🇧🇷";
      case "Germany": return "🇩🇪";
      case "Australia": return "🇦🇺";
      case "Argentina": return "🇦🇷";
      case "Belgium": return "🇧🇪";
      case "Colombia": return "🇨🇴";
      case "CostaRica": return "🇨🇷";
      case "Croatia": return "🇭🇷";
      case "Denmark": return "🇩🇰";
      case "Egypt": return "🇪🇬";
      case "England": return "🏴󠁧󠁢󠁥󠁮󠁧󠁿";
      case "France": return "🇫🇷";
      case "Iceland": return "🇮🇸";
      case "Iran": return "🇮🇷";
      case "Japan": return "🇯🇵";
      case "Mexico": return "🇲🇽";
      case "Morocco": return "🇲🇦";
      case "Nigeria": return "🇳🇬";
      case "Panama": return "🇵🇦";
      case "Peru": return "🇵🇪";
      case "Poland": return "🇵🇱";
      case "Portugal": return "🇵🇹";
      case "SaudiArabia": return "🇸🇦";
      case "Senegal": return "🇸🇳";
      case "Serbia": return "🇷🇸";
      case "SouthKorea": return "🇰🇷";
      case "Spain": return "🇪🇸";
      case "Sweden": return "🇸🇪";
      case "Switzerland": return "🇨🇭";
      case "Tunisia": return "🇹🇳";
      case "Uruguay": return "🇺🇾";
      default: return ""
    }
  }
}
