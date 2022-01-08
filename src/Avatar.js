import React from "react";
import "./Avatar.css";

function Avatar({ gravatar }) {
  return <img src={gravatar} className="avatar" alt="avatar" />;
}

export { Avatar };
