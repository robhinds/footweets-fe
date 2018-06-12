import React, { Component } from 'react';

export default class TweetDisplay extends Component {

  render() {
    return (
      <blockquote className="tweet">
        <p className="content">
          { this.props.tweet }
        </p>
        <p className="author">
          <strong> @{ this.props.author } </strong>
        </p>
      </blockquote>
    );
  }
}
