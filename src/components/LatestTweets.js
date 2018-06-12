import React, { Component } from 'react';
import TweetDisplay from './TweetDisplay';


export default class LatestTweets extends Component {

  constructor(props, cotext) {
    super(props, constructor)
    this.state = {
      currentTweets: [
        {
          content: "I am so proud of our national team ♥️ #Russia2018 #Egypt 🇪🇬🏆 #ThePharaohs #WorldCup",
          author: "Mai",
          score: 65
        }
      ]
    };
  }

  componentDidMount() {
    this.fetchLatestTweets();
  }

  fetchLatestTweets() {
   var that = this;
     fetch('/latest').then(function (response) {
       return response.json();
     }).then(function (result) {
       that.setState({
         currentTweets: result.data.map( function(item) {
           return {
             content: item['content'],
             author: item['author'],
             score: item['sentimentScore']
           };
         })
       })
     });
 }

  render() {
    return (
      this.state.currentTweets.map(function(t){
        return <TweetDisplay tweet={t.content} author={t.author} />
      })
    );
  }
}
