import React from 'react';

class Tweet extends React.Component {
  
  componentWillMount() {
    this.state.newTweets()
  }

  render() {
    return (
      <div className="tweet">{this.props.text}</div>
    )
  }
}

export default Tweet;
