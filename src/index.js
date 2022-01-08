import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Avatar } from "./Avatar";
import { Message } from "./Message";
import { NameWithHandle } from "./NameWithHandle";
import { Time, ReplyButton, LikeButton, RetweetButton } from "./ActionButtons";
function Tweet() {
  return (
    <div className="tweet">
      <div className="header">
        <Avatar />
        <NameWithHandle />
      </div>
      <Message />
      <div className="time-container">
        <Time />
      </div>
      <div className="buttons">
        <ReplyButton />
        <RetweetButton />
        <LikeButton />
      </div>
    </div>
  );
}
ReactDOM.render(<Tweet />, document.querySelector("#root"));
