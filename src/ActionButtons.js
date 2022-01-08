import React from "react";
import "./ActionButtons.css";

const Time = () => <span className="time">2:39 AM - 3 Jan 2016</span>;

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button">
    <span> 986</span>
  </i>
);

const LikeButton = () => (
  <i className="fa fa-heart like-button">
    <span> 1,404</span>
  </i>
);

export { Time, ReplyButton, RetweetButton, LikeButton };
