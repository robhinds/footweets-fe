import React, { Component } from 'react';
import LatestTweets from '../components/LatestTweets';


export default class LatestTweetsContainer extends Component {

  state = { tweets: [] }

  componentDidMount() {
    var that = this;
    fetch('/latest').then(function (response) {
      return response.json();
    }).then(function (result) {
      that.setState({
        tweets: result.data.map( item => (
          {
            content: item['content'],
            author: item['author'],
            score: item['sentimentScore']
          }
        ))
      })
    });
  }

  render() {
    return <LatestTweets tweets={this.state.tweets} />;
  }

}
