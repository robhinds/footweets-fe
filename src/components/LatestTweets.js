import React, { Component } from 'react';
import TweetDisplay from './TweetDisplay';

export default class LatestTweets extends Component {

  render() {
    return (
      this.props.tweets.map(t => (
        <TweetDisplay tweet={t.content} author={t.author} />
      ))
    );
  }
}
