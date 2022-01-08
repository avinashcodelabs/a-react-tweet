import React from "react";
import "./ActionButtons.css";

const Time = ({ time }) => <span className="time">{time}</span>;

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = ({ count }) => (
  <i className="fa fa-retweet retweet-button">
    <span> {count}</span>
  </i>
);

const LikeButton = ({ count }) => (
  <i className="fa fa-heart like-button">
    <span> {count}</span>
  </i>
);

export { Time, ReplyButton, RetweetButton, LikeButton };
