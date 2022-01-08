import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Avatar } from "./Avatar";
import { Message } from "./Message";
import { NameWithHandle } from "./NameWithHandle";
import { Time, ReplyButton, LikeButton, RetweetButton } from "./ActionButtons";
import { TWEETS_DATA } from "./TWEETS_DATA";

function Tweets(props) {
  const { tweets } = props;
  return (
    <>
      {tweets.map((t) => (
        <Tweet key={t.id} tweet={t} />
      ))}
    </>
  );
}

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <div className="header">
        <Avatar gravatar={tweet.gravatar} />
        <NameWithHandle author={tweet.author} />
      </div>
      <Message text={tweet.message} />
      <div className="time-container">
        <Time time={tweet.timestamp} />
      </div>
      <div className="buttons">
        <ReplyButton />
        <RetweetButton count={tweet.retweets} />
        <LikeButton count={tweet.likes} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <Tweets tweets={TWEETS_DATA} />,
  document.querySelector("#root")
);
